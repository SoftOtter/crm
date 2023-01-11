using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Messenger.DTOs;
using Messenger.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Messenger.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ChatsController : ControllerBase
    {
        private const string GetLastMessagesSql =
            @"SELECT m.*
            FROM public.""Messages"" m
            JOIN (SELECT ""ChatId"", MAX(""Meta"") as ""Meta""
                FROM public.""Messages""
                WHERE ""ChatId"" IN ({0})
                GROUP BY ""ChatId"") lm ON lm.""ChatId"" = m.""ChatId"" AND lm.""Meta"" = m.""Meta""";
        private readonly MessengerContext _dbContext;

        public ChatsController(MessengerContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            if (!int.TryParse(Request.Cookies["signedInUser"], out var cookieUserId))
                return Unauthorized();

            var user = await this._dbContext.Users
                .Include($"{nameof(Models.User.Chats)}.{nameof(Chat.Partcipants)}")
                .FirstOrDefaultAsync(u => u.Id == cookieUserId);

            if (user == null) return Unauthorized();

            var chatIds = user.Chats.Select(c => c.Id).ToArray();
            var lastMessages = await this._dbContext.Messages
                .FromSqlRaw(string.Format(GetLastMessagesSql, string.Join(',', chatIds)))
                .ToArrayAsync();

            var chatDTOs = user.Chats.Select(c =>
            {
                var lastMessage = lastMessages.FirstOrDefault(m => m.ChatId == c.Id);
                var dto = new ChatDTO
                {
                    Id = c.Id,
                    UserId = c.Partcipants.First(u => u.Id != user.Id).Id,
                    LastMessage = lastMessage?.Text,
                    LastMessageMeta = lastMessage?.Meta ?? DateTimeOffset.MinValue,
                };

                return dto;
            });

            return Ok(chatDTOs);
        }

        [HttpGet("{chatId}/messages")]
        public async Task<IActionResult> ChatMessages([FromRoute] int chatId, [FromQuery] DateTimeOffset? after, [FromQuery] DateTimeOffset? before) {
            if (!int.TryParse(Request.Cookies["signedInUser"], out var cookieUserId))
                return Unauthorized();

            var user = await this._dbContext.Users
                .Include(u => u.Chats)
                .FirstOrDefaultAsync(u => u.Id == cookieUserId);

            if (user == null) return Unauthorized();

            if (user.Chats.All(c => c.Id != chatId)) return BadRequest();

            var messagesQuery = this._dbContext.Messages
                .AsNoTracking()
                .Where(m => m.ChatId == chatId);
            if (after.HasValue) messagesQuery = messagesQuery.Where(m => m.Meta > after);
            if (before.HasValue) messagesQuery = messagesQuery.Where(m => m.Meta > before);
            var messages = await messagesQuery
                .OrderBy(m => m.Meta)
                .ToArrayAsync();

            return Ok(messages.Select(m => new MessageDTO(m)));
        }

        [HttpPost("{chatId}/messages")]
        public async Task<IActionResult> PostMessage([FromRoute] int chatId, [FromBody] PostMessageDTO newMessageDTO) {
            if (!int.TryParse(Request.Cookies["signedInUser"], out var cookieUserId))
                return Unauthorized();

            var user = await this._dbContext.Users
                .Include($"{nameof(Models.User.Chats)}.{nameof(Chat.Partcipants)}")
                .FirstOrDefaultAsync(u => u.Id == cookieUserId);

            if (user == null) return Unauthorized();

            if (user.Chats.All(c => c.Id != chatId)) return BadRequest();

            var message = new Message
            {
                Text = newMessageDTO.Text,
                ChatId = chatId,
                UserId = user.Id,
                Meta = DateTimeOffset.UtcNow,
                Status = MessageStatus.Unread,
                Type = 0,
            };
            this._dbContext.Messages.Add(message);
            await this._dbContext.SaveChangesAsync();
            
            return Ok(new MessageDTO(message));
        }
    }
}

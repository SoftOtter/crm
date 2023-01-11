using System;
using System.Linq;
using System.Threading.Tasks;
using Messenger.DTOs;
using Messenger.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Messenger.Controllers {
    [Route("[controller]")]
    public class RegisterController : Controller {
        private readonly MessengerContext _dbContext;

        public RegisterController(MessengerContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("")]
        public async Task<ActionResult> Register([FromForm] RegisterDTO registerData)
        {
            var existingUser = await this._dbContext.Users.AsNoTracking().FirstOrDefaultAsync(u => u.Email == registerData.Email);
            if (existingUser != null) return BadRequest("User with same username already exists");

            var newUser = new User {
                Name = registerData.Name,
                Email = registerData.Email,
                Password = registerData.Password,
            };
            this._dbContext.Users.Add(newUser);
            await this._dbContext.SaveChangesAsync();

            var users = await this._dbContext.Users.Where(u => u.Id != newUser.Id).ToArrayAsync();
            var chatCreationDate = DateTimeOffset.UtcNow;
            var chats = users.Select(u => new Chat {
                DateOfCreation = chatCreationDate,
                Type = ChatType.Private,
                Partcipants = new[] { u, newUser },
            });
            this._dbContext.Chats.AddRange(chats);
            await this._dbContext.SaveChangesAsync();

            return Redirect("/login");
        }
    }
}
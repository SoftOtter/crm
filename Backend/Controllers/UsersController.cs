using System.Linq;
using System.Threading.Tasks;
using Messenger.DTOs;
using Messenger.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Messenger.Controllers
{
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly MessengerContext _dbContext;

        public UsersController(MessengerContext dbContext)
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

            var users = await this._dbContext.Users.Where(u => u.Id != user.Id).ToArrayAsync();
            return Ok(users.Select(u => new UserDTO(u)));
        }
    }
}

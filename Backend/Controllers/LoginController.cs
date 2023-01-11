using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Messenger.DTOs;
using Messenger.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Messenger.Controllers
{
    [Route("[controller]")]
    public class LoginController : Controller
    {
        private readonly MessengerContext _dbContext;

        public LoginController(MessengerContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("")]
        public ActionResult Login([FromForm] LoginDTO loginData)
        {
            var user = _dbContext.Users.FirstOrDefault(x => x.Email == loginData.Email);

            if (user == null || loginData.Password != user.Password)
            {
                return Redirect("/login");
            }

            var cookieOptions = new CookieOptions();
            cookieOptions.MaxAge = TimeSpan.FromDays(7);
            Response.Cookies.Append("signedInUser", user.Id.ToString(), cookieOptions);

            return Redirect("/");
        }

        [HttpGet("/logout")]
        public ActionResult Logout() {
            Response.Cookies.Append("signedInUser", "null", new CookieOptions { MaxAge = TimeSpan.FromSeconds(1) });

            return Redirect("/login");
        }
    }
}

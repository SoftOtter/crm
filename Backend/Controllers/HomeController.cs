using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Messenger.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Messenger.Controllers
{
    public class HomeController : Controller
    {
        private readonly MessengerContext _dbContext;

        public HomeController(MessengerContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IActionResult> Index()
        {
            if (int.TryParse(Request.Cookies["signedInUser"], out var cookieUserId)) {
                var userCount = await this._dbContext.Users.CountAsync(u => u.Id == cookieUserId);
                if (userCount > 0) {
                    return View();
                }
            }

            return Redirect("/login");
        }
    }
}

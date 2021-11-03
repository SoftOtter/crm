using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Messenger.DTOs;
using Messenger.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Messenger.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly MessengerContext _dbContext;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, MessengerContext dbContext)
        {
            _logger = logger;
            _dbContext = dbContext;
        }

        [HttpGet]
        public IEnumerable<WeatherForecastData> Get()
        {
            var rng = new Random();

            return Enumerable.Range(1, 5).Select(index => new WeatherForecastData
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }

        [HttpGet]
        [Route("named")]
        public IEnumerable<WeatherForecastData> Get(string query)
        {
            var rng = new Random();

            return Enumerable.Range(1, 5).Select(index => new WeatherForecastData
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)] + " " + query
            })
            .ToArray();
        }

        [HttpPost]
        [Route("addUser")]
        public ActionResult<UserDTO> AddUser([FromBody]AddUserDTO data)
        {
            var user = new User();
            user.Name = data.Name;
            user.Email = data.Email;
            user.Password = data.Password;

            if (_dbContext.Users.Select(u => u.Email).Any(email => email == data.Email))
            {
                return BadRequest("User with this email already exists");
            }

            _dbContext.Users.Add(user);
            _dbContext.SaveChanges();

            var result = new UserDTO(user);
            return result;
        }
    }
}

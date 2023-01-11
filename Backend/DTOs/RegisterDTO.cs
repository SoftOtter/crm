using System.ComponentModel.DataAnnotations;

namespace Messenger.DTOs
{
    public class RegisterDTO
    {
        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }

        [Required(ErrorMessage = "User name is required")]
        public string Name { get; set; }

        [Required(ErrorMessage = "User email is required")]
        public string Email { get; set; }
    }
}
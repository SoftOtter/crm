using System.ComponentModel.DataAnnotations;

namespace Messenger.DTOs
{
    public class PostMessageDTO
    {
        [Required(ErrorMessage = "Text is required")]
        public string Text { get; set; }
    }
}
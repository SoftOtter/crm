using System.Collections.Generic;

namespace Messenger.Models
{
    public class ChatParticipant
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int ChatId { get; set; }

        public User User { get; set; }
        public Chat Chat { get; set; }
    }
}
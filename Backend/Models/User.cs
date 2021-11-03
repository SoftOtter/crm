using System.Collections.Generic;

namespace Messenger.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string PhoneNumber { get; set; }
        public string AvatarPath { get; set; }
        public UserStatus Status { get; set; }

        public ICollection<ChatParticipant> Chats { get; set; }
    }
}
using System;
using System.Collections.Generic;

namespace Messenger.Models
{
    public class Chat
    {
        public int Id { get; set; }
        public ChatType Type { get; set; }
        public DateTimeOffset DateOfCreation { get; set; }

        public ICollection<User> Partcipants { get; set; }
    }
}
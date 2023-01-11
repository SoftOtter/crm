using System;
using Messenger.Models;

namespace Messenger.DTOs
{
    public class ChatDTO {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string LastMessage { get; set; }
        public DateTimeOffset LastMessageMeta { get; set; }
    }
}
using System;
using Messenger.Models;

namespace Messenger.DTOs
{
    public class MessageDTO
    {
        public string Id { get; set; }
        public int MessageFrom { get; set; }
        public string Message { get; set; }
        public DateTimeOffset MessageMeta { get; set; }

        public MessageDTO(string id, int messageFrom, string message, DateTimeOffset messageMeta)
        {
            Id = id;
            MessageFrom = messageFrom;
            Message = message;
            MessageMeta = messageMeta;
        }

        public MessageDTO(Message message)
        {
            Id = message.Id.ToString();
            MessageFrom = message.UserId;
            Message = message.Text;
            MessageMeta = message.Meta;
        }
    }
}
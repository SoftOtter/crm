namespace Messenger.Models
{
    public class Message
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public MessageStatus Status { get; set; }
        public int Type { get; set; }
        public int ChatId { get; set; }
        public int UserId { get; set; }
        public int FileId { get; set; }

        public Chat Chat { get; set; }
        public User User { get; set; }
        public File File { get; set; }
    }
}
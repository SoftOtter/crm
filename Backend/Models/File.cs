namespace Messenger.Models
{
    public class File
    {
        public int Id { get; set; }
        public string Path { get; set; }
        public int UserId { get; set; }

        public User Author { get; set; }
    }
}
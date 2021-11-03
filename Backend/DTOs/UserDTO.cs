using Messenger.Models;

namespace Messenger.DTOs
{
    public class UserDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string AvatarPath { get; set; }

        public UserDTO() {}
        public UserDTO(int id, string name, string email, string phoneNumber, string avatarPath)
        {
            Id = id;
            Name = name;
            Email = email;
            PhoneNumber = phoneNumber;
            AvatarPath = avatarPath;
        }
        public UserDTO(User user)
        {
            Id = user.Id;
            Name = user.Name;
            Email = user.Email;
            PhoneNumber = user.PhoneNumber;
            AvatarPath = user.AvatarPath;
        }
    }
}
using Microsoft.EntityFrameworkCore;

namespace Messenger.Models
{
    public class MessengerContext : DbContext
    {
        public MessengerContext (DbContextOptions<MessengerContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Chat> Chats { get; set; }
        public DbSet<ChatParticipant> ChatParticipants { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<File> Files { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasKey(u => u.Id);
            modelBuilder.Entity<Chat>()
                .HasKey(c => c.Id);
            modelBuilder.Entity<ChatParticipant>()
                .HasKey(cp => cp.Id);
            modelBuilder.Entity<Message>()
                .HasKey(m => m.Id);
            modelBuilder.Entity<File>()
                .HasKey(f => f.Id);

            modelBuilder.Entity<User>()
                .Property(u => u.Id)
                .ValueGeneratedOnAdd();
            modelBuilder.Entity<Chat>()
                .Property(c => c.Id)
                .ValueGeneratedOnAdd();
            modelBuilder.Entity<ChatParticipant>()
                .Property(cp => cp.Id)
                .ValueGeneratedOnAdd();
            modelBuilder.Entity<Message>()
                .Property(m => m.Id)
                .ValueGeneratedOnAdd();
            modelBuilder.Entity<File>()
                .Property(f => f.Id)
                .ValueGeneratedOnAdd();

            modelBuilder.Entity<ChatParticipant>()
                .HasOne(cp => cp.Chat)
                .WithMany(c => c.Partcipants)
                .HasForeignKey(cp => cp.ChatId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<User>()
                .HasMany(u => u.Chats)
                .WithOne(cp => cp.User)
                .HasForeignKey(cp => cp.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Message>()
                .HasOne(m => m.Chat)
                .WithMany()
                .HasForeignKey(m => m.ChatId)
                .OnDelete(DeleteBehavior.Cascade);
            modelBuilder.Entity<Message>()
                .HasOne(m => m.User)
                .WithMany()
                .HasForeignKey(m => m.UserId)
                .OnDelete(DeleteBehavior.SetNull);
            modelBuilder.Entity<Message>()
                .HasOne(m => m.File)
                .WithMany()
                .HasForeignKey(m => m.FileId)
                .OnDelete(DeleteBehavior.SetNull);

            modelBuilder.Entity<File>()
                .HasOne(f => f.Author)
                .WithMany()
                .HasForeignKey(f => f.UserId)
                .OnDelete(DeleteBehavior.SetNull);
        }
    }
}
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace DataAccess.Models
{
    public partial class RealEstateManagermentContext : DbContext
    {
        public RealEstateManagermentContext()
        {
        }

        public RealEstateManagermentContext(DbContextOptions<RealEstateManagermentContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Address> Address { get; set; }
        public virtual DbSet<DetailProjects> DetailProjects { get; set; }
        public virtual DbSet<ProjectTypes> ProjectTypes { get; set; }
        public virtual DbSet<Projects> Projects { get; set; }
        public virtual DbSet<RealEstateTypes> RealEstateTypes { get; set; }
        public virtual DbSet<Users> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Data Source=. ;Initial Catalog=RealEstateManagerment;Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Address>(entity =>
            {
                entity.Property(e => e.AddressId).HasColumnName("AddressID");

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Country).HasMaxLength(50);

                entity.Property(e => e.CreateBy)
                    .HasMaxLength(50)
                    .HasDefaultValueSql("('admin')");

                entity.Property(e => e.CreateDay)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.District).HasMaxLength(50);

                entity.Property(e => e.Street)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.TimeStamp)
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.UpdateBy)
                    .HasMaxLength(50)
                    .HasDefaultValueSql("('admin')");

                entity.Property(e => e.Ward).HasMaxLength(50);
            });

            modelBuilder.Entity<DetailProjects>(entity =>
            {
                entity.HasKey(e => e.DetailProjectId)
                    .HasName("PK__DetailPr__5F4BB5A46F7FB472");

                entity.Property(e => e.DetailProjectId).HasColumnName("DetailProjectID");

                entity.Property(e => e.Content)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.CreateBy)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.CreateDay).HasColumnType("datetime");

                entity.Property(e => e.DayEnd).HasColumnType("datetime");

                entity.Property(e => e.DayStart).HasColumnType("datetime");

                entity.Property(e => e.Describe)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.DetailProjectType)
                    .HasMaxLength(50)
                    .HasDefaultValueSql("('For Sold')");

                entity.Property(e => e.Orientation)
                    .IsRequired()
                    .HasMaxLength(60);

                entity.Property(e => e.ProjectId).HasColumnName("ProjectID");

                entity.Property(e => e.TimeStamp).HasColumnType("datetime");

                entity.Property(e => e.TitleNews).HasMaxLength(50);

                entity.Property(e => e.UpdateBy)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.Project)
                    .WithMany(p => p.DetailProjects)
                    .HasForeignKey(d => d.ProjectId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__DetailPro__Proje__25869641");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.DetailProjects)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__DetailPro__UserI__267ABA7A");
            });

            modelBuilder.Entity<ProjectTypes>(entity =>
            {
                entity.HasKey(e => e.ProjectTypeId)
                    .HasName("PK__ProjectT__6F245E438BBB6AA6");

                entity.Property(e => e.ProjectTypeId).HasColumnName("ProjectTypeID");

                entity.Property(e => e.CreateBy)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.CreateDay).HasColumnType("datetime");

                entity.Property(e => e.ProjectTypeName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.TimeStamp).HasColumnType("datetime");

                entity.Property(e => e.UpdateBy)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Projects>(entity =>
            {
                entity.HasKey(e => e.ProjectId)
                    .HasName("PK__Projects__761ABED0AD2D3ED3");

                entity.Property(e => e.ProjectId).HasColumnName("ProjectID");

                entity.Property(e => e.AddressId).HasColumnName("AddressID");

                entity.Property(e => e.CreateBy)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.CreateDay).HasColumnType("datetime");

                entity.Property(e => e.DayEnd).HasColumnType("datetime");

                entity.Property(e => e.DayStart).HasColumnType("datetime");

                entity.Property(e => e.ProjectName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.ProjectTypeId).HasColumnName("ProjectTypeID");

                entity.Property(e => e.RetypeId).HasColumnName("RETypeID");

                entity.Property(e => e.Status)
                    .HasMaxLength(50)
                    .HasDefaultValueSql("('Waiting')");

                entity.Property(e => e.TimeStamp).HasColumnType("datetime");

                entity.Property(e => e.UpdateBy)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.HasOne(d => d.Address)
                    .WithMany(p => p.Projects)
                    .HasForeignKey(d => d.AddressId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Projects__Addres__20C1E124");

                entity.HasOne(d => d.ProjectType)
                    .WithMany(p => p.Projects)
                    .HasForeignKey(d => d.ProjectTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Projects__Projec__1FCDBCEB");

                entity.HasOne(d => d.Retype)
                    .WithMany(p => p.Projects)
                    .HasForeignKey(d => d.RetypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Projects__REType__1ED998B2");
            });

            modelBuilder.Entity<RealEstateTypes>(entity =>
            {
                entity.HasKey(e => e.RetypeId)
                    .HasName("PK__RealEsta__4BB34A02EE954CE9");

                entity.Property(e => e.RetypeId).HasColumnName("RETypeID");

                entity.Property(e => e.CategoryName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.CreateBy)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.CreateDay).HasColumnType("datetime");

                entity.Property(e => e.Rename)
                    .IsRequired()
                    .HasColumnName("REName")
                    .HasMaxLength(50);

                entity.Property(e => e.TimeStamp).HasColumnType("datetime");

                entity.Property(e => e.UpdateBy)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK__Users__1788CCAC81323C08");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.Property(e => e.AccountName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.AddressId).HasColumnName("AddressID");

                entity.Property(e => e.Avartar)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.CreateBy)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.CreateDay).HasColumnType("datetime");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.PhoneNumber)
                    .IsRequired()
                    .HasColumnName("phoneNumber")
                    .HasMaxLength(50);

                entity.Property(e => e.Position)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.TimeStamp).HasColumnType("datetime");

                entity.Property(e => e.UpdateBy)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.HasOne(d => d.Address)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.AddressId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Users__AddressID__164452B1");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}

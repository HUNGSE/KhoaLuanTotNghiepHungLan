using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace DataAccess.Models
{
    public partial class Users
    {
        public Users()
        {
            DetailProjects = new HashSet<DetailProjects>();
        }

        public int UserId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public bool Banned { get; set; }
        public string Avartar { get; set; }
        public int AddressId { get; set; }
        public string PhoneNumber { get; set; }
        public string AccountName { get; set; }
        public string Password { get; set; }
        public string Position { get; set; }
        public string CreateBy { get; set; }
        public DateTime CreateDay { get; set; }
        public string UpdateBy { get; set; }
        public DateTime TimeStamp { get; set; }

        public virtual Address Address { get; set; }
        public virtual ICollection<DetailProjects> DetailProjects { get; set; }
    }
}

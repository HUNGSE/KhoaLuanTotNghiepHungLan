using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace DataAccess.Models
{
    public partial class Address
    {
        public Address()
        {
            Projects = new HashSet<Projects>();
            Users = new HashSet<Users>();
        }

        public int AddressId { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string District { get; set; }
        public string Ward { get; set; }
        public string Street { get; set; }
        public double Latitude { get; set; }
        public double Longtitude { get; set; }
        public string CreateBy { get; set; }
        public DateTime? CreateDay { get; set; }
        public string UpdateBy { get; set; }
        public DateTime? TimeStamp { get; set; }

        public virtual ICollection<Projects> Projects { get; set; }
        public virtual ICollection<Users> Users { get; set; }
    }
}

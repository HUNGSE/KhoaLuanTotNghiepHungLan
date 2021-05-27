using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace DataAccess.Models
{
    public partial class Projects
    {
        public Projects()
        {
            DetailProjects = new HashSet<DetailProjects>();
        }

        public int ProjectId { get; set; }
        public string ProjectName { get; set; }
        public int RetypeId { get; set; }
        public int ProjectTypeId { get; set; }
        public string Status { get; set; }
        public DateTime DayStart { get; set; }
        public DateTime DayEnd { get; set; }
        public string CreateBy { get; set; }
        public DateTime CreateDay { get; set; }
        public string UpdateBy { get; set; }
        public DateTime TimeStamp { get; set; }
        public string AttachFile { get; set; }
        public int AddressId { get; set; }

        public virtual Address Address { get; set; }
        public virtual ProjectTypes ProjectType { get; set; }
        public virtual RealEstateTypes Retype { get; set; }
        public virtual ICollection<DetailProjects> DetailProjects { get; set; }
    }
}

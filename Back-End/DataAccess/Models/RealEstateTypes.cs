using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace DataAccess.Models
{
    public partial class RealEstateTypes
    {
        public RealEstateTypes()
        {
            Projects = new HashSet<Projects>();
        }

        public int RetypeId { get; set; }
        public string Rename { get; set; }
        public string CategoryName { get; set; }
        public string CreateBy { get; set; }
        public DateTime CreateDay { get; set; }
        public string UpdateBy { get; set; }
        public DateTime TimeStamp { get; set; }

        public virtual ICollection<Projects> Projects { get; set; }
    }
}

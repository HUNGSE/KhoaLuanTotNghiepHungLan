using System;
using System.Collections.Generic;
using System.Text;

namespace DataModule
{
   public  class ProjectsModel
    {
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
    }
}

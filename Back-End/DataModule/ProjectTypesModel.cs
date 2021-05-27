using System;
using System.Collections.Generic;
using System.Text;

namespace DataModule
{
    public class ProjectTypesModel
    {
        public int ProjectTypeId { get; set; }
        public string ProjectTypeName { get; set; }
        public string CreateBy { get; set; }
        public DateTime CreateDay { get; set; }
        public string UpdateBy { get; set; }
        public DateTime TimeStamp { get; set; }
    }
}

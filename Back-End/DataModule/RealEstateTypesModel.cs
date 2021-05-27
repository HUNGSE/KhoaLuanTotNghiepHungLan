using System;
using System.Collections.Generic;
using System.Text;

namespace DataModule
{
    public class RealEstateTypesModel
    {
        public int RetypeId { get; set; }
        public string Rename { get; set; }
        public string CategoryName { get; set; }
        public string CreateBy { get; set; }
        public DateTime CreateDay { get; set; }
        public string UpdateBy { get; set; }
        public DateTime TimeStamp { get; set; }
    }
}

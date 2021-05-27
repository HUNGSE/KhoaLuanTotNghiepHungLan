using System;
using System.Collections.Generic;
using System.Text;

namespace DataModule
{
    public class AddressModel
    {
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
    }
}

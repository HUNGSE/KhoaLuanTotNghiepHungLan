using System;
using System.Collections.Generic;
using System.Text;

namespace DataModule
{
   public  class DetailProjectsModel
    {
        public int DetailProjectId { get; set; }
        public int UserId { get; set; }
        public int ProjectId { get; set; }
        public double TotalValue { get; set; }
        public DateTime DayStart { get; set; }
        public DateTime DayEnd { get; set; }
        public bool Closed { get; set; }
        public string Orientation { get; set; }
        public double Acreage { get; set; }
        public double Layoutapartment { get; set; }
        public int Floors { get; set; }
        public int AmountOfBedroom { get; set; }
        public int AmountOfToilet { get; set; }
        public int ParkingLot { get; set; }
        public string TitleNews { get; set; }
        public string Describe { get; set; }
        public string Content { get; set; }
        public string DetailProjectType { get; set; }
        public string AttachFile { get; set; }
        public string CreateBy { get; set; }
        public DateTime CreateDay { get; set; }
        public string UpdateBy { get; set; }
        public DateTime TimeStamp { get; set; }
    }
}

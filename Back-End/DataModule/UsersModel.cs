using System;
using System.Collections.Generic;
using System.Text;

namespace DataModule
{
    public class UsersModel
    {
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
    }
}

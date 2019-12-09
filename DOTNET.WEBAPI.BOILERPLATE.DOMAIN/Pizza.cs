using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DOTNET.WEBAPI.BOILERPLATE.DOMAIN
{
    public class Pizza : BaseEntity
    {
        public int UserId { get; set; }
        public int NumberOfPeople { get; set; }
        public int Flavours { get; set; }
        public int Slices { get; set; }
        public int MaxSlices { get; set; }
    }
}

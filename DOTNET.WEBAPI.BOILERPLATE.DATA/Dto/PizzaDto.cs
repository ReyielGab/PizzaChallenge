using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DOTNET.WEBAPI.BOILERPLATE.DATA.Dto
{
    public class PizzaDto
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int NumberOfPeople { get; set; }
        public int Flavours { get; set; }
        public int Slices { get; set; }
        public int MaxSlices { get; set; }
        public decimal NumberOfPizza { get; set; }
    }
}

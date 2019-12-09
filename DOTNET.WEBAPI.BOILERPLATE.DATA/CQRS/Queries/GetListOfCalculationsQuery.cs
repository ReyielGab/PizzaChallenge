using DOTNET.WEBAPI.BOILERPLATE.DATA.Context;
using DOTNET.WEBAPI.BOILERPLATE.DATA.Dto;
using ShortBus;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DOTNET.WEBAPI.BOILERPLATE.DATA.CQRS.Queries
{
    public class GetListOfCalculationsQuery : IRequest<List<PizzaDto>>
    {
        public int UserId { get; set; }
    }

    public class GetListOfCalculationsQueryHandler : IRequestHandler<GetListOfCalculationsQuery, List<PizzaDto>>
    {
        private readonly IBoilerDbContext _dbContext;

        public GetListOfCalculationsQueryHandler(IBoilerDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<PizzaDto> Handle(GetListOfCalculationsQuery request)
        {
            var pizza = _dbContext.Pizzas.Where(x => x.UserId == request.UserId).ToList();

            var pizzaDto = pizza.Select(x =>
            {

                var dto = new PizzaDto();
                dto.NumberOfPeople = x.NumberOfPeople;
                dto.Flavours = x.Flavours;
                dto.MaxSlices = x.MaxSlices;
                dto.Slices = x.Slices;                
                dto.NumberOfPizza = (decimal) (x.NumberOfPeople * x.Flavours * x.MaxSlices) / x.Slices;

                return dto;


            }).ToList();


            return pizzaDto;
        }
    }
}

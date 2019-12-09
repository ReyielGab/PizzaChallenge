using DOTNET.WEBAPI.BOILERPLATE.DATA.Context;
using DOTNET.WEBAPI.BOILERPLATE.DATA.Dto;
using DOTNET.WEBAPI.BOILERPLATE.DOMAIN;
using Omu.ValueInjecter;
using ShortBus;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DOTNET.WEBAPI.BOILERPLATE.DATA.CQRS.Commands
{
    public class NewPizzaCalculationCommand : IRequest<PizzaDto>
    {
        public int UserId { get; set; }
        public int NumberOfPeople { get; set; }
        public int Flavours { get; set; }
        public int Slices { get; set; }
        public int MaxSlices { get; set; }
        public int NumberOfPizza { get; set; }
    }
    public class NewPizzaCalculationCommandHandler : IRequestHandler<NewPizzaCalculationCommand, PizzaDto>
    {
        private readonly IBoilerDbContext _dbContext;

        public NewPizzaCalculationCommandHandler(IBoilerDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public PizzaDto Handle(NewPizzaCalculationCommand request)
        {
            var newPizzaCalc = new Pizza
            {
              Flavours = request.Flavours,
              MaxSlices = request.MaxSlices,
              NumberOfPeople = request.NumberOfPeople,
              Slices = request.Slices,
              UserId = request.UserId
            };

            _dbContext.Pizzas.Add(newPizzaCalc);
            _dbContext.SaveChanges();

            var dto = new PizzaDto()
            {
                UserId = newPizzaCalc.UserId,
                Slices = newPizzaCalc.Slices,
                MaxSlices = newPizzaCalc.MaxSlices,
                Flavours = newPizzaCalc.Flavours,
                NumberOfPeople = newPizzaCalc.NumberOfPeople,
                NumberOfPizza = (decimal) (newPizzaCalc.NumberOfPeople * newPizzaCalc.Flavours * newPizzaCalc.MaxSlices) / newPizzaCalc.Slices

            };


            return dto;
        }
    }
}

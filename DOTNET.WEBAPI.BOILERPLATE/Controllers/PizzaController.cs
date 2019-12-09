using DOTNET.WEBAPI.BOILERPLATE.DATA.CQRS.Commands;
using DOTNET.WEBAPI.BOILERPLATE.DATA.CQRS.Queries;
using DOTNET.WEBAPI.BOILERPLATE.DATA.Dto;
using ShortBus;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Description;

namespace DOTNET.WEBAPI.BOILERPLATE.Controllers
{
    [RoutePrefix("api/Pizza")]
    public class PizzaController : ApiController
    {
        private readonly IMediator _mediator;

        public PizzaController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        [Route("GetListOfCalculations")]
        [ResponseType(typeof(PizzaDto))]
        public IHttpActionResult GetListOfCalculationsQuery([FromUri] GetListOfCalculationsQuery query)
        {
            var request = _mediator.Request(query);

            return Ok(request.Data);
        }
        
        [HttpPost]
        [Route("NewPizzaCalculation")]
        public IHttpActionResult NewPizzaCalculation([FromBody] NewPizzaCalculationCommand command)
        {
            var response = _mediator.Request(command);

            return Created("", response.Data);

        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using DataAccess.Models;
using DataModule;
using IServiceBase;
using IServices;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APINetCore.Controllers
{
    [Route("api/address")]
    [ApiController]
    public class AddressController : ControllerBase
    {
        private readonly IAddressService _services;
        private readonly IMapper _mapper;
        public AddressController(IAddressService services, IMapper mapper)
        {
            _services = services;
            _mapper = mapper;
        }
        [HttpGet]
        public IActionResult GetAll()
        {
            var list = _services.GetAll();
            var listMap = _mapper.Map<IEnumerable<AddressModel>>(list);
            return Ok(listMap);
        }
        [HttpGet("{id}")]
        public IActionResult GetByID(int id)
        {
            var item = _services.GetByID(id);
            var itemMap = _mapper.Map<AddressModel>(item);
            return Ok(itemMap);
        }
        [HttpPut("{id}")]
        public IActionResult Update(int id, AddressModel updateModel)
        {
            var addressFromRepo = _services.GetByID(id);
            _mapper.Map(updateModel, addressFromRepo);
            _services.Update(addressFromRepo);
            _services.SaveChange();
            return Ok(updateModel);
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var addressFromRepo = _services.GetByID(id);
            if (addressFromRepo == null)
                return BadRequest("Not a value address id");
            _services.Delete(addressFromRepo);
            _services.SaveChange();

            return Ok();
        }


    }
}

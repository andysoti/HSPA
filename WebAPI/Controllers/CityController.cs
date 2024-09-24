using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Dtos;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private readonly IUnitOfWork uow;

        public CityController(IUnitOfWork uow)
        {
            this.uow = uow;
        }


        // GET api/city
        [HttpGet]
        public async Task<IActionResult> GetCities()
        {
            var cities = await uow.CityRepository.GetCitiesAsync();        
            var citiesDto = from c in cities
                select new CityDto()
                {
                    Id = c.Id,
                    Name = c.Name
                };
            return Ok(citiesDto);
             }
 



        [HttpPost("post")]
         public async Task<IActionResult> AddCity(CityDto cityDto){
                // map cityDTO to city
                var city = new City {
                Name = cityDto.Name,
                LastUpdatedBy = 1,
                LastUpdatedOn = DateTime.Now
            };

            uow.CityRepository.AddCity(city);
            await uow.SaveAsync();
            return StatusCode(201);
        }  

        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteCity(int id)
        {
             uow.CityRepository.DeleteCity(id);
            await uow.SaveAsync();
            return Ok(id);
        }  


    }
}
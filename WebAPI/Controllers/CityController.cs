using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Data.Repo;
using WebAPI.Models;
namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private readonly ICityRepository repo;
        public CityController(ICityRepository repo)
        {
            this.repo = repo;
        }


        // GET api/city
        [HttpGet]
        public async Task<IActionResult> GetCities()
        {
             var cities = await repo.GetCitiesAsync();          
            return Ok(cities);
            // return new string[] {"Atlanta", "New York", "Chicago", "Boston", "Toronto", "Detroit"};
        }
 



        [HttpPost("post")]
        public async Task<IActionResult> AddCity(City city){

            repo.AddCity(city);
            await repo.SaveAsync();
            return StatusCode(201);
        }  

        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteCity(int id)
        {
            repo.DeleteCity(id);
            await repo.SaveAsync();
            return Ok(id);
        }  


    }
}
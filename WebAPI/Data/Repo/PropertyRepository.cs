using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebAPI.Interfaces;
using WebAPI.Models;
namespace WebAPI.Data.Repo
{
    public class PropertyRepository : IPropertyRepository
    {
        private readonly DataContext dc;
        public PropertyRepository(DataContext dc)
        {
            this.dc = dc;
        }
        public void AddProperty(Property property)
        {
            throw new System.NotImplementedException();
        }
        public void DeleteProperty(int id)
        {
            throw new System.NotImplementedException();
        }
        public async Task<IEnumerable<Property>> GetPropertiesAsync(int sellRent)
        {
            var properties = await dc.Properties
            .Include(p => p.PropertyType) // navigation properties to join
            .Include(p => p.City) // these are the foreign keys to relate
            .Include(p => p.FurnishingType) // Inner Join
            .Where(p => p.SellRent == sellRent)
            .ToListAsync();
            return properties;
        }
    }
}
using System;
using System.ComponentModel.DataAnnotations;
namespace WebAPI.Models

{
    public class City
    {
        public int Id { get; set; }
        public string Name { get; set; }
        
        [Required] // Migrate the db and EF will make it required, add to DTO as well.
        public string Country { get; set; }
        public DateTime LastUpdatedOn { get; set; }
        public int LastUpdatedBy { get; set; }
    }
}


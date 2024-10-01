using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace WebAPI.Models

{
    public class City : BaseEntity
    {
        public string Name { get; set; }
        
        [Required] // Migrate the db and EF will make it required, add to DTO as well.
        public string Country { get; set; }
    }
}


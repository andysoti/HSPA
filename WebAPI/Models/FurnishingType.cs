using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Net.Http.Headers;
namespace WebAPI.Models
{
    public class FurnishingType: BaseEntity
    {

        [Required]
        public string Name { get; set; }
    }
}
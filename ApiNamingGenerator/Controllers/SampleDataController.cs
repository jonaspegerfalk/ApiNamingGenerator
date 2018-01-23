using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ApiNamingGenerator.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {


        private static string[] ApiNameParts = new[]
        {
            "Core", "Extension", "Mock", "Adapter", "Framework", "Manager", "Service"
        };
        [HttpGet("[action]")]
        public IEnumerable<GeneratedName> GeneratedNames()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new GeneratedName
            {
                DateCreated = DateTime.Now.AddMinutes(-index * rng.Next(50)).ToString("g"),
                Name = ApiNameParts[rng.Next(ApiNameParts.Length)] + ApiNameParts[rng.Next(ApiNameParts.Length)]
            }).OrderByDescending(o => o.DateCreated);
        }
        public class GeneratedName
        {
            public string Name { get; set; }
            public string DateCreated { get; set; }
        }



        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }
    }
}

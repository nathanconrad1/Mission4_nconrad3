using Microsoft.AspNetCore.Mvc;
using Mission4_nconrad3.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4_nconrad3.Controllers
{
    public class BlahController : Controller
    {
        public IActionResult Index()
        {
            

            return View();
        }

        [HttpGet]
        public IActionResult GradeCalculator()
        {
            return View();
        }

        [HttpPost]
        public IActionResult GradeCalculator(GradeCalculatorModel model)
        {
            return View();
        }

    }
}

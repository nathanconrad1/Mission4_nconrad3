using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4_nconrad3.Models
{
    public class GradeCalculatorModel
    {
        [Range(0,100)]
        [Required]
        public int assignments { get; set; }
        [Range(0, 100)]
        [Required]
        public int groupProjects { get; set; }
        [Range(0, 100)]
        [Required]
        public int quizzes { get; set; }
        [Range(0, 100)]
        [Required]
        public int midterm { get; set; }
        [Range(0, 100)]
        [Required]
        public int final { get; set; }
        [Range(0, 100)]
        [Required]
        public int intex { get; set; }



        //public void setAssignment(string input)
        //{
        //    this.assignments = input;
        //}

        //public void string getAssignment()
        //{
        //    return this.assignments;
        //}
    }
}

//function to calculate the final grade

document.getElementById("buttonSend").addEventListener("click",
    function () {
    /*alert("from: " + $("#assignments").val());*/

//variables
    let assignment = parseInt($("#assignments").val());
    let group = parseInt($("#groupProjects").val());
    let quiz = parseInt($("#quizzes").val());
    let mid = parseInt($("#midterm").val());
    let fin = parseInt($("#final").val());
    let intex = parseInt($("#intex").val());
    let total = 0;
    let grade = '';

//calculate by their weight
    assignment = assignment * .5;
    group = group * .1;
    quiz = quiz * .1;
    mid = mid * .1;
    fin = fin * .1;
    intex = intex * .1;
//calc total
    total = assignment + group + quiz + mid + fin + intex;

//assign letter grade
    if (total >= 94)
        grade = 'A';
    else if (total >= 90)
        grade = 'A-';
    else if (total >= 87)
        grade = 'B+';
    else if (total >= 84)
        grade = 'B';
    else if (total >= 80)
        grade = 'B-';
    else if (total >= 77)
        grade = 'C+';
    else if (total >= 74)
        grade = 'C';
    else if (total >= 70)
        grade = 'C-';
    else if (total >= 67)
        grade = 'D+';
    else if (total >= 64)
        grade = 'D';
    else if (total >= 60)
        grade = 'D-';
    else if (total < 60)
        grade = 'F';

//print to the form
    grades.innerHTML = ("Final Letter Grade: " + grade);
        result.innerHTML = ("Total Score in Class: " + total);
        alert("Total Score in Class: " + total);

})

//$("#cooPic").fadeOut("slow");
// can add .click instead of .addEventListener
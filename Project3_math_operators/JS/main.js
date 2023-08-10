//this fuction will preform multiple simple math equations
function math1() {
    var multiple_math = (5 - 5) * (5 + 10);
    document.getElementById("math") .innerHTML = "5 minus 5, multiplied by 5, plus 10 equals " + multiple_math; 
}
//this is the modulus code
function math2() {
    var modulus = 6 % 100;
    document.getElementById("mathA") .innerHTML = "When you divide 6 by 100 you have a remainder of: " + modulus;
}
//increment/Decrement code
function math3() {
    var x = 7;
    x++;
    var y = 9;
    y--;
    document.write(x, y);
}
//random number generator
function Random() {
    var rnd = Math.floor(Math.random() * 1000000000);
    document.getElementById('FN').value = rnd;
}
//this function has an error that we can check with console.log
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greetinhg") .innerHTML = "How are you today?";
    }
    console.log()
}

//this is a global and local variable
var X = 10;
function Subtract_numbers_1() {
    document.write(40 - X - "<br>");
}
function Subtract_numbers_2() {
    document.write(X - 400);
}
Subtract_numbers_1();
Subtract_numbers_2();
console.log()

//IF statement
if (15 < 77) {
    document.write("the number on the right is smaller than the left")
}

//Time function
function Time() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 13 == Time > 1) {
        Reply = "It Is night.";
    }
    else if (Time >= 13 == Time < 17 ) {
        Reply = "It is daytime.";
    }
    else {
        Reply = "It is night.";
    }
    document.getElementById("Current_time").innerHTML = Reply;
}
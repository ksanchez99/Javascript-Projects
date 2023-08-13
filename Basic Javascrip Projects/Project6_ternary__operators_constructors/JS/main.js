//Ternary Operator for finding voting age
function Voting_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").ariaValueMax;
    Can_vote =  ( Age > 14) ? "You are not old enough to vote":"You are old enough to vote";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

//Constructor using "new" and "this"
function Avalanche(Weapon, Limitbreak, Style, Materia) {
    this.Avalanche_Weapon = Weapon;
    this.Avalanche_Limitbreak =Limitbreak;
    this.Avalanche_Style = Style;
    this.Avalanche_Materia = Materia;
}
var Cloud = new Avalanche("Buster", "Braver", "Close Combat", "Black");
var Barret = new Avalanche("Cannon", "Blaster", "Long range", "Thunder");
var Tifa = new Avalanche("Knucles", "Summersault", "Close", "Steal");
function FF_Function() {
    document.getElementById("Keywords").innerHTML = 
    "Cloud uses the " + Cloud.Avalanche_Weapon + " sword and " + Cloud.Avalanche_Limitbreak +
    " in " + Cloud.Avalanche_Style;
}

//This is a nested function
function counting_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 10;
        function Plus_Eight() {Starting_point += 8;}
        Plus_Eight();
        return Starting_point;
    }
}
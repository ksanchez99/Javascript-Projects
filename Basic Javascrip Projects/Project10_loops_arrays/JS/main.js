//For Loop Function
var Instruments = ["Guitar", "Drums", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
}
document.getElementById("List_of_Instruments").innerHTML = Content;
}

//Array function
function Dog_Activities() {
    var Dog_Stuff = [];
    Dog_Stuff[0] ="Eating";
    Dog_Stuff[1] ="Playing";
    Dog_Stuff[2] ="Barking";
    Dog_Stuff[3] ="Sleeping";
    document.getElementById("Dog").innerHTML = "A dogs life, is action packed. " +
    Dog_Stuff[2] + ".";
}

//Const Keyword function
function Constant_function() {
    const Musical_Instrument = {type:"console", brand:"Playstation", color:"white"};
    Musical_Instrument.color = "white";
    Musical_Instrument.price = "$499";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}

//Let keyword
var Z = 99;
document.write(Z);
{
    let Z = 88;
    document.write("<br>" + Z);
}
document.write("<br>" + Z);

//Objects
let gpu = {
    chipset: "GA102 ",
    model: "3080 ",
    brand: "Asus ",
    price: "$799 ",
    description : function() {
        return "The gpu is a " + this.chipset + this.model + this.brand + this.price;
        }
    };
    document.getElementById("gpu_object") .innerHTML = gpu.description();
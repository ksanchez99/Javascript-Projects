//This is a full sentenmce using concat method()
function Sentence() {
    var part_1 = "I love ";
    var part_2 = "cats ";
    var part_3 = "who like to eat ";
    var part_4 = "fish. ";
    var Whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = Whole_sentence; 
}

//This function utilizes slice method
function Verticle_Slice() {
  var Sentence = "My milkshake brings all the cats to the yard. ";
  var Section = Sentence.slice (22, 42);
  document.getElementById("Slice").innerHTML = Section;  
}

//This is a number method function
function string_Method_man() {
    var X =187;
    document.getElementById("String_numbers").innerHTML = X.toString();
}

//TOPRECISION method
function precision_guided_rocket() {
    var X = 1249839.7775689210;
    document.getElementById("Precision_missle").innerHTML = X.toPrecision(12);
}
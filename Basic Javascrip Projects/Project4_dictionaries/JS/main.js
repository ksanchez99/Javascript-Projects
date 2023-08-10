function Car_Dictionary() { //key value dictionary
    var Vehicle = { //all keys for this key value pair
        Make: "Dodge",
        Color: "Black",
        Model: "Charger",
        Msrp: "$34,000",
        Engine: "V8"
    };
    delete Vehicle.Engine;
    document.getElementById("Dictionary") .innerHTML = Vehicle.Engine;
}
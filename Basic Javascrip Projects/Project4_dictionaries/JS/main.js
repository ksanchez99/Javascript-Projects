function Car_Dictionary() {
    var Vehicle = {
        Make: "Dodge",
        Color: "Black",
        Model: "Charger",
        Msrp: "$34,000",
        Engine: "V8"
    };
    delete Vehicle.Engine;
    document.getElementById("Dictionary") .innerHTML = Vehicle.Engine;
}
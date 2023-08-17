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
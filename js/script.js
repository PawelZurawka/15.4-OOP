'use strict';

function Phone(brand, price, color, display) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.display = display;
}
Phone.prototype.printInfo = function() {
    console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price + '. Type of display:' + this.display);
}

var SamsungGalaxyS6 = new Phone('Samsung', 1500, 'black', ' Super AMOLED');
var iPhone6s = new Phone('Apple', 3000, 'pink', ' Retina HD');
var onePlusOne = new Phone('OnePlus', 2500, 'red', ' IPS TFT');

SamsungGalaxyS6.printInfo();
iPhone6s.printInfo();
onePlusOne.printInfo();
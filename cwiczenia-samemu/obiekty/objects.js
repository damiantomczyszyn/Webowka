const car = { 
    color: 'red',
    year: 2001,
    drive() {
        console.log('driving... ')
    }
}
console.log(car.color)
console.log(car)

car.power = 201
console.log(car)
console.log(car.power)

delete car.power
console.log(car.power)

function Car(color, year){
    this.color = color;
    this.year = year;
}
const car2 = new Car ('red', 2007)
console.log(car2)


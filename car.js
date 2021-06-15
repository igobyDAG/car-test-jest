// var Car = {
//     model: 'VW',
//     year: new Date('2000'),
//     wheels: 4,
//     gas: 0,
//     kmPerLt: 16.9,
//     color: 'red',
//     hybrid: False
// }

class Car {
    model= 'not defined';
    year= 'not specified';
    wheels= 4;
    gas= 0; // available gas
    kmPerLt= 0;
    color= 'not specified';
    hybrid= false;
    tank=0; // gas capacity
    kms = 0;

    // colors = ['red','white','blue']

    constructor(model,color,kmPerLt,tank,price,year,gas) {
        // colors[1] // 'blue'
        this.model = model;
        this.color = color;
        this.kmPerLt = kmPerLt;
        this.tank = tank;
        this.price = price;
        this.year = year;
        this.gas = gas;
    }
    // // tambien se puede:
    // constructor(props) {
    //     this.company = props['company'];
    //     this.model = props.model;
    //     this.color = props.color;
    //     this.kmPerLt = props.kmPerLt;
    //     this.tank = props.tank;
    //     this.price = props.price;
    //     this.year = props.year;

    availableGasSpace() {
        return this.tank - this.gas
    }

    addGas(liters) {
        return this.gas += liters;
    }

    currentGas() {
        return this.gas;
    }

    maximumDistanceToTravel(){
        return this.gas * this.kmPerLt // total km = avaliable gas * km per lt
    }

    move(kms) {
        this.maximumDistanceToTravel();
        if (kms > this.maximumDistanceToTravel()) {
            this.km += this.maximumDistanceToTravel();
            this.gas -= this.maximumDistanceToTravel() / this.kmPerLt;
        } else {
            this.kms += kms;
            this.gas -= kms / this.kmPerLt;
        }
    }


    get currentValue() {
        const time = new Date();
        const currentYear = time.getFullYear();
        let newPrice = this.price;

        for (let diff = currentYear - this.year; diff > 0; diff--){
            newPrice -= newPrice * 0.2;
        }
        return newPrice
    }


}

// For command line testing
// var carrito = new Car(model="Ibiza")
// console.log(carrito.model)


module.exports = Car;
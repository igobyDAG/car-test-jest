const Car = require('./car');

// Agregar test de qué pasa si le agrego mucha gasolina. Qué pasa si el tanque está lleno y le agrego más gas de la que le cabe?
// this.gas = (this.gas+gas<50)?this.gas+gas:50;

//test('car model to equal vw', () => {
//test('car color to equal red', () => {
//test('car current gas to equal zero', () => {
//test('adding gas to car', () => {
//test('car km per lt to equal', () => {
//test('move car 5,000 kms', () => {
//test('move car 5 kms', () => {
//test('Car curent sale price is lower than when new')

// tarea: calcular la devaulación. Kelly's blue book como referencia

/* const golf = new Car({
    company: 'VW',
    model: 'Taos',
    color:'Red',
    kmPerLT: 16.9,
    tank;50
})
 */

const golf = new Car(model='VW',color='red',kmPerLt=16.9,tank=50,price=200000,year=2008,gas=0)

test('car model to equal vw', () => {
    expect(golf.model).toBe('VW');
  });

test('car color to equal red', () => {
    expect(golf.color).toBe('red');
});

test('car current gas to be equal to zero', () => {
    expect(golf.currentGas()).toBe(0);
  });

test('adding gas to a car', () => {
    expect(golf.availableGasSpace()).toBeGreaterThanOrEqual(0);
    golf.addGas(80);
    expect(golf.currentGas()).toBeGreaterThanOrEqual(golf.tank);
});

// test('car km per lt to equal', () => {
//     expect()
// })

test('move car 5 kms', () => {
    golf.move(5)
    expect(golf.kms).toBe(5)
});

test('Devaluated car cost must be lower than when new', () => {
    expect(golf.currentValue).toBeLessThan(golf.price)
})
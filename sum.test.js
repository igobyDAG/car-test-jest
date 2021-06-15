const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds two numbers to be less than 10', () => {
  expect(sum(3,3)).toBeLessThan(10);
})

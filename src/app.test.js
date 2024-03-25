const { search } = require('./app');

test('should return 3 when search 78 in [12, 34, 56, 78, 90]', () => {
  const result = search([12, 34 ,56, 78, 90], 78);
  expect(result).toBe(3);
});

test('should return 2 when search 2123 in [76, 543, 2123, 4567]', () => {
  const result = search([76, 543, 2123, 4567], 2123);
  expect(result).toBe(2);
});

test('should return -1 when array is empty', () => {
  const result = search([], 2123);
  expect(result).toBe(-1);
});

test('should return -1 when the target is not in array', () => {
  const result = search([1, 2, 3], 5);
  expect(result).toBe(-1);
});
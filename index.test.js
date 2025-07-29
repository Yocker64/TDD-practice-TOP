import * as module from './index.js';

test('Capitalizes any word', () => {
  expect(module.capitalize('aslkjc')).toBe('Aslkjc');
});

test('Reverses any word', () => {
  expect(module.reverseString('1234')).toBe('4321');
});

test('Sum function of calculator', () => {
  expect(module.calcu.add(4, 7)).toBe(11);
});

test('Substract function of calculator', () => {
  expect(module.calcu.substract(4, 7)).toBe(-3);
});

test('Sum function of calculator', () => {
  expect(module.calcu.multiply(4, 7)).toBe(28);
});

test('Sum function of calculator', () => {
  expect(module.calcu.divide(4, 7)).toBe(4 / 7);
});

test('Sum function of calculator', () => {
  expect(module.calcu.divide(4, 0)).toBe(undefined);
});

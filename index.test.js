import * as module from './index.js';

test('Capitalizes any word', () => {
  expect(module.capitalize('aslkjc')).toBe('Aslkjc');
});

test('Reverses any word', () => {
  expect(module.reverseString('1234')).toBe('4321');
});

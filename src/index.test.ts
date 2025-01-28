import { padLeft } from './index';

test('prepend a number of spaces', () => {
  expect(padLeft(2, 'hola')).toBe('  hola');
});

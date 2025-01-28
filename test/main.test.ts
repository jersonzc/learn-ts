import { padLeft } from '../src/main';

test('prepend a number of spaces', () => {
  expect(padLeft(2, 'hola')).toBe('  hola');
});

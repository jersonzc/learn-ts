/*
  If padding is a number, it will treat that as the number of spaces we want
  to prepend to input. If padding is a string, it should just prepend padding
  to input.
 */
export function padLeft(padding: number | string, input: string): string {
  if (typeof padding === 'number') {
    return ' '.repeat(padding) + input;
  }
  return padding + input;
}

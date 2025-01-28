/*
  If padding is a number, it will treat that as the number of spaces we want
  to prepend to input. If padding is a string, it should just prepend padding
  to input.
 */
export function padLeft(padding: number | string, input: string): string {
  return '';
}

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet('Brendan', new Date());

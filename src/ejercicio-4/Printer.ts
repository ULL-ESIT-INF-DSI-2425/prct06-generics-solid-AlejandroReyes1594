import { Printable } from "./Printable";

export class Printer implements Printable {
  print(): void {
    console.log('Printing...');
  }
}

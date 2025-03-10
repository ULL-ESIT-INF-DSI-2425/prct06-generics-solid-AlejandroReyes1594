import { Printable } from "./Printable";
import { Scannable } from "./Scannable";

export class PrinterScanner implements Printable, Scannable {
  print(): void {
    console.log('Printing...');
  }

  scan(): void {
    console.log('Scanning...');
  }
}

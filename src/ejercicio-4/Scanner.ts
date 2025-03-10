import { Scannable } from "./Scannable";

export class Scanner implements Scannable {
  scan(): void {
    console.log('Scanning...');
  }
}

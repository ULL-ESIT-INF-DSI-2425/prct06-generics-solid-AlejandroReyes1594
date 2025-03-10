import { Bird } from './bird';
import { Flyable } from './flyable';

// Clase de un gorrión, que puede volar
export class Sparrow extends Bird implements Flyable {
  fly(): void {
    console.log("Flying...");
  }
}

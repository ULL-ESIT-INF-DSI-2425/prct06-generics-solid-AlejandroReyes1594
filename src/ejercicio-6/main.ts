import { Sparrow } from './sparrow';
import { Penguin } from './penguin';

// Cliente que utiliza las clases Sparrow y Penguin

const sparrow = new Sparrow();
sparrow.fly();  // El gorrión puede volar

const penguin = new Penguin();
// El pingüino no puede volar, no se llama a fly()

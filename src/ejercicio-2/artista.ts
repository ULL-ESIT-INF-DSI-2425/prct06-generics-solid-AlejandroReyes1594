// src/ejercicio-2/Artista.ts
import { Disco } from "./disco";
export class Artista {
  constructor(
    public nombre: string,
    public oyentesMensuales: number,
    public discografia: Disco[]
  ) {}
}

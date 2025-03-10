/**
 *  Implementacion de la clase Estudiante
 * 
 */
import { Persona } from "./Persona";

export class Estudiante extends Persona {
    // Constructor 
  constructor(
    nombre: string,
    apellidos: string,
    fechaNacimiento: Date,
    numeroFamiliares: number,
    coche: boolean,
    private correoInstitucional: string, // atributo propio
    private turnoTarde:boolean // atributo propio
  ) {
    super(nombre, apellidos, fechaNacimiento, numeroFamiliares, coche);
  }

  // retorna el correo
  getCorreoInstitucional(): string {
    return this.correoInstitucional;
  }

  // establece el correo a un nuevo string
  setCorreoInstitucional(correo: string): void {
    this.correoInstitucional = correo;
  }

  // retorna si es del turno de tarde o no
  getTurnoTarde():boolean{
    return this.turnoTarde;
  }

  // establece si es del turno de tarde o no
  setTurnoTarde(turnoTarde:boolean):void{
    this.turnoTarde=turnoTarde;
  }

    // muestra los datos del estudiante
  mostrarDatos(): string {
    return `Estudiante: ${this.getNombre()} ${this.getApellidos()}, Correo: ${this.correoInstitucional}`;
  }
}

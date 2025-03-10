/**
 * Implementacion de la clase Profesor que consta de correo institucional, horario de tutorias y numero de sesiones diarias
 */

import { Persona } from "./Persona";

export class Profesor extends Persona {
    //constructor 
  constructor(
    nombre: string,
    apellidos: string,
    fechaNacimiento: Date,
    numeroFamiliares: number,
    coche: boolean,
    private correoInstitucional: string, //atributo propio
    private horarioTutorias: string, //atributo propio
    private numeroSesionesDia:number //atributo propio
  ) {
    super(nombre, apellidos, fechaNacimiento, numeroFamiliares, coche);
  }

  //retorna el correo
  getCorreoInstitucional(): string {
    return this.correoInstitucional;
  } 
  //establece el correo a un nuevo string
  setCorreoInstitucional(correo: string): void {
    this.correoInstitucional = correo;
  }
  //retorna el horario
  getHorarioTutorias(): string {
    return this.horarioTutorias;
  }
  //establece un nuevo horario
  setHorarioTutorias(horario: string): void {
    this.horarioTutorias = horario;
  }
  //retorna el numero de sesiones diarias
  getNumeroSesionesDia():number{
    return this.numeroSesionesDia;
  }
  //establece el numero de sesiones diarias
  setNumeroSesionesDia(numeroSesionesDia:number):void{
    this.numeroSesionesDia=numeroSesionesDia;
  }
  //muestra los datos de un profesor
  mostrarDatos(): string {
    let datos= `Profesor: ${this.getNombre()} ${this.getApellidos()}, Correo: ${this.correoInstitucional}, Tutorías: ${this.horarioTutorias}, Sesiones por día ${this.numeroSesionesDia}`;
    return datos;
  }
}

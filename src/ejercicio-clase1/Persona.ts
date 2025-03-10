/**
 * Implementación de la clase base Persona de la cual se extenderan metodos y propiedades
 * 
 */
export abstract class Persona {
    // contructor
    constructor(
      private nombre: string,
      private apellidos: string,
      private fechaNacimiento: Date,
      private numeroFamiliares: number,
      private coche:boolean,

    ) {}
    
    // retorna el nombre 
    getNombre(): string {
      return this.nombre;
    }
    //establece el nombre
    setNombre(nombre: string): void {
      this.nombre = nombre;
    }
    //retorna los apellidos
    getApellidos(): string {
      return this.apellidos;
    }
    //establece los apellidos
    setApellidos(apellidos: string): void {
      this.apellidos = apellidos;
    }
    //retorna la fecha de nacimiento de la persona
    getFechaNacimiento(): Date {
      return this.fechaNacimiento;
    }
    //establece la fecha de nacimiento de la persona
    setFechaNacimiento(fecha: Date): void {
      this.fechaNacimiento = fecha;
    }
    //retorna el numero de familiares de la persona
    getNumeroFamiliares(): number {
        return this.numeroFamiliares;
    }
    //establece el numero de familiares
    setNumeroFamiliares(numeroFamiliares:number):void{
        this.numeroFamiliares=numeroFamiliares;
    }
    //retorna si tiene coche o no
    getCoche(): boolean{
        return this.coche;
    }
    //establece si tiene coche o no
    setCoche(coche:boolean):void{
        this.coche=coche;
    }
    //metodo abstracto para mostrar datos
    abstract mostrarDatos(): string;
  }
  
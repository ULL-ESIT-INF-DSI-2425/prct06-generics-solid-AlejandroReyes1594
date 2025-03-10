export type PokemonType = "fuego" | "agua" | "hierba" | "eléctrico";

export class Pokemon {
  constructor(
    public nombre: string,
    public peso: number,
    public altura: number,
    public tipo: PokemonType,
    public ataque: number,
    public defensa: number,
    public velocidad: number,
    public hp: number
  ) {}

  public getStats(): string {
    return `${this.nombre} (Tipo: ${this.tipo}, HP: ${this.hp}, Atq: ${this.ataque}, Def: ${this.defensa}, Vel: ${this.velocidad})`;
  }
}

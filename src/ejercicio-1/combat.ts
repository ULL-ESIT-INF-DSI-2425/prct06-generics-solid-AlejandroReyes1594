import { Pokemon } from "./pokemon";

export class Combat {
  constructor(private pokemon1: Pokemon, private pokemon2: Pokemon) {}

  private calcularEfectividad(tipoAtacante: string, tipoDefensor: string): number {
    const efectividad: Record<string, Record<string, number>> = {
      fuego: { hierba: 2, agua: 0.5, eléctrico: 1 },
      agua: { fuego: 2, hierba: 0.5, eléctrico: 0.5 },
      hierba: { agua: 2, fuego: 0.5, eléctrico: 1 },
      eléctrico: { agua: 2, fuego: 1, hierba: 1 },
    };
    return efectividad[tipoAtacante]?.[tipoDefensor] || 1;
  }

  private calcularDaño(atacante: Pokemon, defensor: Pokemon): number {
    const efectividad = this.calcularEfectividad(atacante.tipo, defensor.tipo);
    return Math.round(50 * (atacante.ataque / defensor.defensa) * efectividad);
  }

  public start(): void {
    let turno = 1;
    let atacante = this.pokemon1;
    let defensor = this.pokemon2;

    console.log(`¡Comienza el combate entre ${this.pokemon1.nombre} y ${this.pokemon2.nombre}!\n`);

    while (this.pokemon1.hp > 0 && this.pokemon2.hp > 0) {
      console.log(`Turno ${turno}: ${atacante.nombre} ataca a ${defensor.nombre}`);
      const daño = this.calcularDaño(atacante, defensor);
      defensor.hp = Math.max(0, defensor.hp - daño);
      console.log(`🩸 ${defensor.nombre} recibe ${daño} de daño. HP restante: ${defensor.hp}\n`);

      if (defensor.hp <= 0) {
        console.log(`💀 ${defensor.nombre} ha sido derrotado. ¡${atacante.nombre} gana el combate!\n`);
        break;
      }

      [atacante, defensor] = [defensor, atacante]; // Cambio de turnos
      turno++;
    }
  }
}

import { describe, expect, test } from "vitest";
import { Pokemon } from "../src/ejercicio-1/pokemon";
import { Pokedex } from "../src/ejercicio-1/pokedex";
import { Combat } from "../src/ejercicio-1/combat";

describe("Pokemon", () => {
  const pikachu = new Pokemon("Pikachu", 6.0, 0.4, "eléctrico", 55, 40, 90, 211);

  test("Debe crear un Pokémon correctamente", () => {
    expect(pikachu.nombre).toBe("Pikachu");
    expect(pikachu.tipo).toBe("eléctrico");
    expect(pikachu.hp).toBe(211);
  });

  test("Debe devolver las estadísticas en formato string", () => {
    expect(pikachu.getStats()).toBe("Pikachu (Tipo: eléctrico, HP: 211, Atq: 55, Def: 40, Vel: 90)");
  });
});

describe("Pokedex", () => {
  const pokedex = new Pokedex();
  const charizard = new Pokemon("Charizard", 90.5, 1.7, "fuego", 84, 78, 100, 360);
  const blastoise = new Pokemon("Blastoise", 85.5, 1.6, "agua", 83, 100, 78, 362);

  pokedex.agregarPokemon(charizard);
  pokedex.agregarPokemon(blastoise);

  test("Debe agregar y encontrar unkémon por nombre", () => {
    expect(pokedex.buscarPorNombre("Charizard")).toBe(charizard);
    expect(pokedex.buscarPorNombre("Blastoise")).toBe(blastoise);
    expect(pokedex.buscarPorNombre("Pikachu")).toBeUndefined();
  });

  test("Debe buscar Pokémon por tipo", () => {
    expect(pokedex.buscarPorTipo("fuego")).toEqual([charizard]);
    expect(pokedex.buscarPorTipo("agua")).toEqual([blastoise]);
    expect(pokedex.buscarPorTipo("eléctrico")).toEqual([]);
  });
});

describe("Combat", () => {
  const charizard = new Pokemon("Charizard", 90.5, 1.7, "fuego", 84, 78, 100, 360);
  const blastoise = new Pokemon("Blastoise", 85.5, 1.6, "agua", 83, 100, 78, 362);
  const combate = new Combat(charizard, blastoise);

  test("Debe calcular la efectividad correctamente", () => {
    expect(combate["calcularEfectividad"]("fuego", "hierba")).toBe(2);
    expect(combate["calcularEfectividad"]("agua", "fuego")).toBe(2);
    expect(combate["calcularEfectividad"]("eléctrico", "agua")).toBe(2);
    expect(combate["calcularEfectividad"]("fuego", "agua")).toBe(0.5);
  });

  test("Debe calcular el daño correctamente", () => {
    expect(combate["calcularDaño"](charizard, blastoise)).toBeGreaterThan(0);
    expect(combate["calcularDaño"](blastoise, charizard)).toBeGreaterThan(0);
  });

  test("Debe ejecutar una batalla", () => {
    combate.start();
    expect([charizard.hp, blastoise.hp]).toContain(0); // Uno de los dos debe quedar en 0
  });
});

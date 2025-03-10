import { Pokemon, PokemonType } from "./pokemon";

export class Pokedex {
  private pokemons: Pokemon[] = [];

  public agregarPokemon(pokemon: Pokemon): void {
    this.pokemons.push(pokemon);
  }

  public buscarPorNombre(nombre: string): Pokemon | undefined {
    return this.pokemons.find(pokemon => pokemon.nombre.toLowerCase() === nombre.toLowerCase());
  }

  public buscarPorTipo(tipo: PokemonType): Pokemon[] {
    return this.pokemons.filter(pokemon => pokemon.tipo === tipo);
  }

  public mostrarTodos(): void {
    this.pokemons.forEach(pokemon => console.log(pokemon.getStats()));
  }
}

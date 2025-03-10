    import { Pokemon } from "./pokemon";
    import { Pokedex } from "./pokedex";
    import { Combat } from "./combat";

    const charizard = new Pokemon("Charizard", 90.5, 1.7, "fuego", 84, 78, 100, 360);
    const blastoise = new Pokemon("Blastoise", 85.5, 1.6, "agua", 83, 100, 78, 362);
    const venusaur = new Pokemon("Venusaur", 100.0, 2.0, "hierba", 82, 83, 80, 364);
    const pikachu = new Pokemon("Pikachu", 6.0, 0.4, "eléctrico", 55, 40, 90, 211);

    const pokedex = new Pokedex();
    pokedex.agregarPokemon(charizard);
    pokedex.agregarPokemon(blastoise);
    pokedex.agregarPokemon(venusaur);
    pokedex.agregarPokemon(pikachu);

    console.log("Pokémons en la Pokédex:");
    pokedex.mostrarTodos();

    const combate1 = new Combat(charizard, blastoise);
    combate1.start();

import axios, { AxiosInstance } from "axios";
import { IPokeCardsPokemon, IPokeDetails, IDetailsEvolution, IPokeSave } from "../models/pokeModels";

class EvolutionApi {
    apiEvolutions: AxiosInstance;
    apiPokemons: AxiosInstance;

    constructor() {
        this.apiEvolutions = axios.create({ baseURL: "https://pokeapi.co/api/v2/evolution-chain/" });
        this.apiPokemons = axios.create({ baseURL: "https://pokeapi.co/api/v2/pokemon/" });
    }

    formatTrigger(trigger: string): string {
        switch (trigger) {
            case "level-up":
                return "level up";
            
            case "use-item":
                return "use item";

            case "shed":
                return "ter uma poke-bola na mochila e um espaço vazio no time";
                        
            case "tower-of-darkness":
                return "treine na tower of darkness";
            
            case "tower-of-waters":
                return "treine na tower of waters";

            case "three-critical-hits":
                return "acerte três crítical hits em uma batalha";
            
            case "take-damage":
                return "vá para algum lugar depois de sofrer dano";

            case "Other":
                return "outro";

            case "agile-style-move":
                return "movimento de estilo de agilidade";

            case "strong-style-move":
                return "movimento de estilo de força";

            case "recoil-damage":
                return "dano de recuo";
            
            default:
                return trigger;
        }
    }

    formatType(type: string): string {
        switch (type) {
            case "min_level":
                return "level";
            
            case "min_happiness":
                return "felicidade";
            
            case "held_item":
                return "segurar item";
            
            case "known_move":
                return "Aprender um movimento";

            case "known_move_type":
                return "Aprender um tipo de movimento";

            case "location":
                return "localização";
            
            case "time_of_day":
                return "período do dia";
            
            case "min_beauty":
                return "beleza";

            case "min_affection":
                return "afeição";
        
            default:
                return type;
        }
    }

    async getDetails(pokeId: number, detailsEvolution: IPokeDetails[]): Promise<IPokeCardsPokemon> {
        const response = await this.apiPokemons.get(pokeId.toString());

        if (response.status !== 200) throw new Error();

        const pokemon = {
            id: response.data.id,
            name: response.data.species.name,
            image: response.data.sprites.front_default,
            type: response.data.types[0].type.name,
            details: detailsEvolution
        }

        return pokemon;
    }

    getDetailsEvolution(pokeEvolution: any): IDetailsEvolution[][] {
        const evolutions: IDetailsEvolution[][] = [];
        const pokemon2: IDetailsEvolution[] = [];
        const pokemon3: IDetailsEvolution[] = [];

        const pokemon = {
            pokeId: pokeEvolution.chain.species.url.split("/")[6],
            evolutionDetails: []
        };

        pokeEvolution.chain.evolves_to.forEach((evolution: any) => {
            const details = evolution.evolution_details.map((detail: any) => {
                const keys = Object.keys(detail);
                const types = [];
                const values = [];

                for (const key of keys) {
                    if((detail[key] || detail[key] === 0) && key !== "trigger") {
                        types.push(this.formatType(key));
                        values.push(key === "item" || key === "held_item" || key === "known_move" || key === "location" || key === "location" || key === "known_move_type" || key === "party_species" ? detail[key].name : detail[key]);
                    }
                }

                return {
                    trigger: this.formatTrigger(detail.trigger.name),
                    type: types,
                    value: values,
                };
            });

            const pokemon = {
                pokeId: evolution.species.url.split("/")[6],
                evolutionDetails: details
            }

            pokemon2.push(pokemon);

            evolution.evolves_to.forEach((evolution: any) => {
                const details = evolution.evolution_details.map((detail: any) => {
                    const keys = Object.keys(detail);
                    const types = [];
                    const values = [];

                    for (const key of keys) {
                        if ((detail[key] || detail[key] === 0) && key !== "trigger") {
                            types.push(this.formatType(key));
                            values.push(key === "item" || key === "held_item" || key === "known_move" || key === "location" || key === "location" || key === "known_move_type" || key === "party_species" ? detail[key].name : detail[key]);
                        }
                    }

                    return {
                        trigger: this.formatTrigger(detail.trigger.name),
                        type: types,
                        value: values,
                    };
                });

                const pokemon = {
                    pokeId: evolution.species.url.split("/")[6],
                    evolutionDetails: details
                }

                pokemon3.push(pokemon);
            });
        });

        evolutions.push([pokemon]);
        if(pokemon2.length !== 0) evolutions.push(pokemon2);
        if(pokemon3.length !== 0) evolutions.push(pokemon3);

        return evolutions;
    }

    async getPokemons(id: number): Promise<IPokeCardsPokemon[][]> {
        const response = await this.apiEvolutions.get(id.toString());

        if (response.status !== 200) throw new Error();

        const evolution = this.getDetailsEvolution(response.data);

        let infoPokemons = [];
        for(let index = 0; index < evolution.length; index++) {
            const info = []

            for (const poke of evolution[index]) {
                const pokemon = await this.getDetails(poke.pokeId, poke.evolutionDetails);
                info.push(pokemon);
            }

            infoPokemons.push(info);
        }

        return infoPokemons;
    }

    checkPokemonSave(pokeName: string): boolean {
        let pokemons = localStorage.getItem("pokemon");

        if (pokemons) {
            const pokemonsArray = JSON.parse(pokemons);
            const findPokemon = pokemonsArray.filter((poke: IPokeSave) => poke.name === pokeName);

            return findPokemon.length ? true : false;
        } else {
            return false;
        }
    }
}

export { EvolutionApi}
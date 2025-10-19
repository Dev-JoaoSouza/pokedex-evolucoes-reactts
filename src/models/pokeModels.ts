export interface IPokeCardsUrl {
    url: string;
}

export interface IGetPokemons {
    evolutionId: number;
    pokemonId: string;
}

export interface IPokeCardType {
    slot: number;
    type: {
        name: string,
        url: string
    }
}

export interface IPokeCardsEvolution {
    id: number;
    name: string;
    img: string;
    types: string[];
}

export interface IPokeCardsPokemon {
    id: number;
    name: string;
    image: string;
    type: string;
    details: IPokeDetails[];
}

export interface IPokeDetails {
    trigger: string;
    type: string[];
    value: string[];
}

export interface IDetailsEvolution {
    pokeId: number;
    evolutionDetails: IPokeDetails[];
}

export interface IPokeSave {
    id: number;
    image: string;
    name: string;
    type: string;
}
export interface ICardPokemon {
    pokeId: number;
    pokeName: string;
    pokeImg: string;
    pokeType: string;
    pokeDetail: {
        trigger: string;
        type: string[];
        value: string[];
    }[];
    save: boolean;
    func: (param: number) => void;
}

export interface ICardPokemonStyled {
    pokeType: string;
}
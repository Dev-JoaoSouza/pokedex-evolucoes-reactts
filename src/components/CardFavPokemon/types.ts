export interface ICardFavPokemon {
    id: number;
    name: string;
    type: string;
    image: string;
    removeFunc: (param: string) => void;
    func: (param: number) => void;
}

export interface ICardFavPokemonStyled {
    pokeType: string;
}
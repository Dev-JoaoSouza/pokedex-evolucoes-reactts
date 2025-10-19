export interface ICardFavEvolution {
    pokeId: number;
    pokeName: string;
    pokeImg: string;
    types: string[];
    removeFunc: (param: number) => void;
    closeFav: () => void;
}

export interface ICardFavEvolutionStyled {
    pokeType: string;
}
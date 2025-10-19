export interface IFavorites {
    renderFunc?: string | (() => void);
    showCards: (param: number) => void;
}

export interface IFavoritesEvolutions {
    id: number;
    name: string;
    image: string;
    types: string[];
}

export interface IFavoritesPokemons {
    id: number;
    name: string;
    type: string;
    image: string;
}

export interface IFavoritesStyledSeleted {
    select: string;
}

export interface IFavoritesStyledHide {
    hide: string;
}
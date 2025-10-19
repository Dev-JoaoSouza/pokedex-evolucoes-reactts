export interface ICardDetails {
    hideCard: string;
    closeFunc: () => void;
    pokeId: number;
}

export interface type {
    slot: number;
    type: {
        name: string,
        url: string
    }
}

export interface ability {
    ability: {
        name: string,
        url: string
    };
    is_hidden: boolean;
    slot: number;
}

export interface ICardDetailsStyled {
    hide?: string;
    pokeType?: string;
    value?: number;
}
export interface ICardsPokemon {
    id: number;
    name: string;
    image: string;
    type: string;
    details: IPokeDetails[];
}

interface IPokeDetails {
    trigger: string;
    type: string[];
    value: string[];
}
import axios, { AxiosInstance } from "axios";
import { IPokeCardsUrl, IGetPokemons, IPokeCardType, IPokeCardsEvolution } from "../models/pokeModels";

class PokeCards {
    apiEvolution: AxiosInstance;
    apiPokemon: AxiosInstance;
    page: number;
    limit: number;
    offset: number;
    total: number;

    constructor() {
        this.apiEvolution = axios.create({ baseURL: 'https://pokeapi.co/api/v2/evolution-chain/' })
        this.apiPokemon = axios.create({ baseURL: 'https://pokeapi.co/api/v2/pokemon/'})
        this.page = this.getPage()
        this.limit = this.getlimit()
        this.offset = this.limit * (this.page - 1)
        this.total = 541
    }

    getPage(): number {
        let currentPage = localStorage.getItem("page");

        if (currentPage === null) {
            localStorage.setItem("page", "1");
            return 1;
        } else {
            return Number(currentPage);
        }
    }

    getlimit(): number {
        const widthViewport = window.innerWidth;

        if (widthViewport <= 500) {
            return 8;
        } else {
            return 12;
        }
    }

    savePage(page: number): void {
        localStorage.setItem("page", page.toString());
    }

    async getPokemonsDetails(evolutionId: number, pokeId: string) {
        const response = await this.apiPokemon.get(pokeId);

        if (response.status !== 200) throw new Error();

        const poke = {
            pokeId: evolutionId,
            pokeName: response.data.species.name,
            pokeImage: response.data.sprites.front_default,
            pokeTypes: response.data.types.map((typeSlot: IPokeCardType) => typeSlot.type.name),
        };

        return poke;
    }

    async getPokemons(pokemon: IPokeCardsUrl): Promise<IGetPokemons> {
        const response = await axios.get(pokemon.url);

        if (response.status !== 200) throw new Error();

        const poke = {
            evolutionId: response.data.id,
            pokemonId: response.data.chain.species.url.split("/")[6]
        }

        return poke;
    }

    async getEvolutions() {
        const url = `?limit=${this.limit}&offset=${this.offset}`;
        const response = await this.apiEvolution.get(url);

        if (response.status !== 200) throw new Error();

        this.total = response.data.count;
        const evolutions = response.data.results;

        const detailRequests = evolutions.map(this.getPokemons);
        const pokemons = await Promise.all(detailRequests);

        const details = pokemons.map((poke) => this.getPokemonsDetails(poke.evolutionId, poke.pokemonId));

        return await Promise.all(details);
    }

    getFirstPage(): boolean {
        if (this.page !== 1) {
            this.page = 1;
            this.offset = 0
    
            this.savePage(this.page);
            return true;
        } else {
            return false;
        }
    }

    getPreviusPage(): boolean {
        let numberPage = this.page;

        if (this.page > 1) {
            numberPage--;
            this.page = numberPage;
            this.offset = this.limit * (numberPage - 1);

            this.savePage(numberPage);
            return true;
        } else {
            return false;
        }
    }

    getNextPage(): boolean {
        let numberPage = this.page;

        if (numberPage < Math.floor(this.total / this.limit) + 1) {
            numberPage++;
            this.page = numberPage;
            this.offset = this.limit * (numberPage - 1);

            this.savePage(numberPage);
            return true;
        } else {
            return false;
        }
    }

    getLastPage(): boolean {
        if (this.page !== (Math.floor(this.total / this.limit) + 1)) {
            this.page = Math.floor(this.total / this.limit) + 1;
            this.offset = this.limit * (this.page - 1);

            this.savePage(this.page);
            return true;
        } else {
            return false;
        }
    }

    getPageByUser(page: number): boolean | void {
        let numberPage = page;

        if ((numberPage > 0) && (numberPage <= (Math.floor(this.total / this.limit) + 1))) {
            this.offset = this.limit * (numberPage - 1);
            this.page = numberPage;

            this.savePage(numberPage);
            return true;
        } else {
            this.getLastPage();
        }
    }

    checkEvolutionSave(id: number): boolean {
        let evolutions = localStorage.getItem("evolution");
        
        if (evolutions) {
            const evolutionsArray = JSON.parse(evolutions);
            const findPokemon = evolutionsArray.filter((poke: IPokeCardsEvolution) => poke.id === id);

            return findPokemon.length ? true : false;
        } else {
            return false
        }
    }
}

export { PokeCards };
import { FavoriteContainer, FavoriteNames, Name, FavoriteCard } from "./styles";
import { CardFavEvolution } from "../CardFavEvolution";
import { CardFavPokemon } from "../CardFavPokemon";
import { useState } from "react";
import { IFavorites, IFavoritesEvolutions, IFavoritesPokemons } from "./types";

const Favorites = ({renderFunc = "none", showCards}: IFavorites) => {
    const [hide, setHide] = useState("true");
    const [selectEvolution, setSelectEvolution] = useState("false");
    const [selectPokemon, setSelectPokemon] = useState("false");

    const [evolutions, setEvolutions] = useState<IFavoritesEvolutions[]>([]);
    const [pokemons, setPokemons] = useState<IFavoritesPokemons[]>([]);

    const handleEvolution = () => {
        if (selectEvolution === "false") {
            setSelectEvolution("true");
            setSelectPokemon("false");
            setHide("false");
            setPokemons([]);

            let evolutions = localStorage.getItem("evolution");
            if (evolutions) {
                const evolutionsArray = JSON.parse(evolutions);

                setEvolutions(evolutionsArray);
            }

        } else {
            setSelectEvolution("false");
            setHide("true");
            setEvolutions([]);
        }
    }

    const handlePokemon = () => {
        if (selectPokemon === "false") {
            setSelectEvolution("false");
            setSelectPokemon("true");
            setHide("false");
            setEvolutions([]);

            let pokemons = localStorage.getItem("pokemon");
            if (pokemons) {
                const pokemonsArray = JSON.parse(pokemons);

                setPokemons(pokemonsArray);
            }

        } else {
            setSelectPokemon("false");
            setHide("true");
            setPokemons([]);
        }
    }

    const removeEvolution = (id: number) => {
        let evolutions = localStorage.getItem("evolution");

        if (evolutions !== null) {
            const evolutionsArray = JSON.parse(evolutions);

            const cardsEvolution = evolutionsArray.filter((card: IFavoritesPokemons) => card.id !== id);
            localStorage.setItem("evolution", JSON.stringify(cardsEvolution));
            setEvolutions(cardsEvolution);
            if(typeof renderFunc === "function") renderFunc();
        }
    }

    const removePokemon = (name: string) => {
        let pokemons = localStorage.getItem("pokemon");

        if (pokemons !== null) {
            const pokemonsArray = JSON.parse(pokemons);
    
            const cardsPokemon = pokemonsArray.filter((card: IFavoritesPokemons) => card.name !== name);
            localStorage.setItem("pokemon", JSON.stringify(cardsPokemon));
            setPokemons(cardsPokemon);
        }
    }

    const closeFavorites = () => {
        setSelectPokemon("false");
        setSelectEvolution("false");
        setHide("true");
        setEvolutions([]);
        setPokemons([]);
    }

    return (
        <FavoriteContainer>
            <FavoriteNames>
                <Name onClick={handleEvolution} select={selectEvolution}>Evoluções</Name>
                <Name onClick={handlePokemon} select={selectPokemon}>Pokémons</Name>
            </FavoriteNames>
            <FavoriteCard hide={hide}>
                {evolutions.length === 0 && selectEvolution === "true" ? <p>Adicione uma Evolução!</p> : ""}
                {pokemons.length === 0 && selectPokemon === "true" ? <p>Adicione um Pokémon!</p> : ""}
                {evolutions.map((evolution) => (
                    <CardFavEvolution
                        pokeId={evolution.id}
                        pokeName={evolution.name}
                        pokeImg={evolution.image}
                        types={evolution.types}
                        removeFunc={removeEvolution}
                        closeFav={closeFavorites}
                    />
                ))}
                {pokemons.map((poke) => (
                    <CardFavPokemon
                        id={poke.id}
                        name={poke.name}
                        type={poke.type}
                        image={poke.image}
                        removeFunc={removePokemon}
                        func={showCards}
                    />
                ))}
            </FavoriteCard>
        </FavoriteContainer>
    )
}

export { Favorites }
import { Pokemon, Number, Image, Name, Trigger, Detail } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as faBookmarkRegular } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as faBookmarkSolid } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { ICardPokemon } from "./types";

const CardPokemon = ({pokeId, pokeName, pokeImg, pokeType, pokeDetail, save, func}: ICardPokemon) => {
    const [icon, setIcon] = useState(save ? faBookmarkSolid : faBookmarkRegular);

    const handleSave = () => {
        if (!save) {
            setIcon(faBookmarkSolid);
    
            const pokemon = {
                id: pokeId,
                name: pokeName,
                type: pokeType,
                image: pokeImg
            }
    
            let pokemons = localStorage.getItem("pokemon");
            let pokemonArray = [];
    
            if (pokemons) {
                pokemonArray = JSON.parse(pokemons);
            }
    
            pokemonArray.push(pokemon);
            localStorage.setItem("pokemon", JSON.stringify(pokemonArray));
        }

        save = true;
    }

    const handleDetails = () => func(pokeId);

    return (
        <Pokemon>
            <FontAwesomeIcon onClick={handleSave} icon={icon} />
            <Number>#{pokeId.toString().padStart(3, '0')}</Number>
            <Image pokeType={pokeType} onClick={handleDetails}>
                <img src={pokeImg} alt={pokeName} />
            </Image>
            <Name>{pokeName}</Name>
            {pokeDetail.map((detail) => (
                <>
                    <Trigger>{detail.trigger}</Trigger>
                    {detail.type.map((typ, index) => {
                        if ((typ === "relative_physical_stats") && (+detail.value[index] === 1)) {
                            return <Detail>Attack {'>'} Defense</Detail>;
                        } else if ((typ === "relative_physical_stats") && (+detail.value[index] === 0)) {
                            return <Detail>Attack {'='} Defense</Detail>;
                        } else if ((typ === "relative_physical_stats") && (+detail.value[index] === -1)) {
                            return <Detail>Attack {'<'} Defense</Detail>;
                        } else {
                            return <Detail>{typ}: {detail.value[index]}</Detail>;
                        }
                    })}
                </>
            ))}
        </Pokemon>
    )
}

export { CardPokemon }
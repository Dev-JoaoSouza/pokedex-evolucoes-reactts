import { PokeCard, Image, Name } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { ICardFavPokemon } from "./types";

const CardFavPokemon = ({id, name, type, image, removeFunc, func}: ICardFavPokemon) => {
    
    const handleRemove = () => removeFunc(name);

    const handleShowDetails = () => func(id);

    return(
        <PokeCard>
            <FontAwesomeIcon onClick={handleRemove} icon={faCircleXmark} />
            <Image pokeType={type} onClick={handleShowDetails}>
                <img src={image} alt={name} />
            </Image>
            <Name>{name}</Name>
        </PokeCard>
    )
}

export { CardFavPokemon }
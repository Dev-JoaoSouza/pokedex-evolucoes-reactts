import { Card, Title, Pokemon, Types, Type } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { ICardFavEvolution } from "./types";

const CardFavEvolution = ({pokeId, pokeName, pokeImg, types, removeFunc, closeFav}: ICardFavEvolution) => {
    const navigate = useNavigate();

    const handleRemove = () => removeFunc(pokeId);

    const handleNav = () => {
        navigate(`/evolution?id=${pokeId}`);
        closeFav();
    }

    return (
        <Card>
            <FontAwesomeIcon onClick={handleRemove} icon={faCircleXmark} />
            <Title>{pokeName}</Title>
            <Pokemon onClick={handleNav} pokeType={types[0]}>
                <img src={pokeImg} alt={pokeName} />
            </Pokemon>
            <Types>
                {types.map((type) => (<Type pokeType = {type}>{type}</Type>))}
            </Types>
        </Card>
    )
}

export { CardFavEvolution };
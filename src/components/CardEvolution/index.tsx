import { Card, Title, Pokemon, Types, Type } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as faBookmarkRegular } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as faBookmarkSolid } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ICardEvolution } from "./types";

const CardEvolution = ({pokeId, pokeName, pokeImg, types, save}: ICardEvolution) => {
    const navigate = useNavigate();
    const [icon, setIcon] = useState(save ? faBookmarkSolid : faBookmarkRegular);

    const handleClick = () => navigate(`/evolution?id=${pokeId}`);

    const handleSave = () => {
        if (!save) {
            setIcon(faBookmarkSolid);
    
            const pokemon = {
                id: pokeId,
                name: pokeName,
                image: pokeImg,
                types: types
            }
    
            let evolutions = localStorage.getItem("evolution");
    
            if (!evolutions) {
                const evolutionsArray = [];
                evolutionsArray.push(pokemon);
    
                localStorage.setItem("evolution", JSON.stringify(evolutions));
            } else {
                const evolutionsArray = JSON.parse(evolutions);
                evolutionsArray.push(pokemon);
    
                localStorage.setItem("evolution", JSON.stringify(evolutionsArray));
            }

            save = true;
        }
    }

    return (
        <Card>
            <FontAwesomeIcon onClick={handleSave} icon={icon} />
            <Title>{pokeName}</Title>
            <Pokemon onClick={handleClick} pokeType={types[0]}>
                <img src={pokeImg} alt={pokeName} />
            </Pokemon>
            <Types>
                {types.map((type) => (<Type pokeType = {type}>{type}</Type>))}
            </Types>
        </Card>
    )
}

export { CardEvolution }
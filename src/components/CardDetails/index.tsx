import { CardContainer, Card, CardImage, CardImageTitle, CardImageTypes, Type, CardDescription, CardDescriptionAbout, CardDescriptionAbility, CardDescriptionAbilityItem } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { FailureScreen } from "../FailureScreen";
import { useNavigate } from "react-router-dom";
import { ICardDetails, type, ability } from "./types";

const CardDetails = ({hideCard, closeFunc, pokeId}: ICardDetails) => {
    const [pokeDetails, setPokeDetails] = useState({
        name: "null",
        id: 0,
        types: [],
        image: "null",
        abilities: [],
        height: 0,
        weight: 0,
        hp: 0,
        attack: 0,
        defense: 0,
        specialAttack: 0,
        specialDefense: 0,
        speed: 0,
    });
    const [hideFaluireScreen, setHideFaluireScreen] = useState("true");
    const navigate = useNavigate();

    const handleClick = () => navigate("/");

    const handleClose = () => closeFunc();

    useEffect(() => {
        const getPokemonDetails = async () => {
            if(pokeId !== 0) {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);

                if (response.status !== 200) throw new Error();
    
                setPokeDetails({
                    name: response.data.name,
                    id: response.data.id,
                    types: response.data.types.map((typeSlot: type) => typeSlot.type.name),
                    image: response.data.sprites.front_default,
                    abilities: response.data.abilities.map((abi: ability) => abi.ability.name),
                    height: response.data.height,
                    weight: response.data.weight,
                    hp: response.data.stats[0].base_stat,
                    attack: response.data.stats[1].base_stat,
                    defense: response.data.stats[2].base_stat,
                    specialAttack: response.data.stats[3].base_stat,
                    specialDefense: response.data.stats[4].base_stat,
                    speed: response.data.stats[5].base_stat
                })
            }
        }

        try {
            setHideFaluireScreen("true");
            getPokemonDetails();
        } catch (error) {
            setHideFaluireScreen("false");
        }
    }, [pokeId])

    return (
        <>
            <CardContainer hide={hideCard}>
                <FontAwesomeIcon onClick={handleClose} icon={faXmark} />
                <Card>
                    <CardImage pokeType={pokeDetails.types[0]}>
                        <CardImageTitle>
                            <h2>{pokeDetails.name}</h2>
                            <span>#{pokeDetails.id.toString().padStart(3, '0')}</span>
                        </CardImageTitle>
                        <CardImageTypes>
                            {pokeDetails.types.map((type) => (<Type pokeType={type}>{type}</Type>))}
                        </CardImageTypes>
                        <img src={pokeDetails.image} alt={pokeDetails.name} />
                    </CardImage>
                    <CardDescription>
                        <h3>Sobre:</h3>
                        <CardDescriptionAbout>
                            <li>
                                <span>habilidades:</span>
                                <span>{pokeDetails.abilities.map((ability) => ability).join(", ")}</span>
                            </li>
                            <li>
                                <span>altura:</span>
                                <span>{pokeDetails.height/10} m</span>
                            </li>
                            <li>
                                <span>peso:</span>
                                <span>{pokeDetails.weight/10} kg</span>
                            </li>
                        </CardDescriptionAbout>

                        <h3>Estatísticas Básicas:</h3>
                        <CardDescriptionAbility>
                            <CardDescriptionAbilityItem value={pokeDetails.hp} pokeType={pokeDetails.types[0]}>
                                <span>HP:</span>
                                <span>{pokeDetails.hp}</span>
                                <span>
                                    <div></div>
                                </span>
                            </CardDescriptionAbilityItem>
                            <CardDescriptionAbilityItem value={pokeDetails.attack} pokeType={pokeDetails.types[0]}>
                                <span>Ataque:</span>
                                <span>{pokeDetails.attack}</span>
                                <span>
                                    <div></div>
                                </span>
                            </CardDescriptionAbilityItem>
                            <CardDescriptionAbilityItem value={pokeDetails.defense} pokeType={pokeDetails.types[0]}>
                                <span>Defesa:</span>
                                <span>{pokeDetails.defense}</span>
                                <span>
                                    <div></div>
                                </span>
                            </CardDescriptionAbilityItem>
                            <CardDescriptionAbilityItem value={pokeDetails.specialAttack} pokeType={pokeDetails.types[0]}>
                                <span>Ataque Especial:</span>
                                <span>{pokeDetails.specialAttack}</span>
                                <span>
                                    <div></div>
                                </span>
                            </CardDescriptionAbilityItem>
                            <CardDescriptionAbilityItem value={pokeDetails.specialDefense} pokeType={pokeDetails.types[0]}>
                                <span>Defesa Especial:</span>
                                <span>{pokeDetails.specialDefense}</span>
                                <span>
                                    <div></div>
                                </span>
                            </CardDescriptionAbilityItem>
                            <CardDescriptionAbilityItem value={pokeDetails.speed} pokeType={pokeDetails.types[0]}>
                                <span>Agilidade:</span>
                                <span>{pokeDetails.speed}</span>
                                <span>
                                    <div></div>
                                </span>
                            </CardDescriptionAbilityItem>
                        </CardDescriptionAbility>
                    </CardDescription>
                </Card>
            </CardContainer>
            <FailureScreen hide={hideFaluireScreen} func={handleClick} />
        </>
    )
}

export { CardDetails }
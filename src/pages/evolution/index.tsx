import { Container, Content, Evolutions, EvolutionCard } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Title } from "../../components/Title";
import { Favorites } from "../../components/Favorites";
import { Loader } from "../../components/Loader";
import { CardPokemon } from "../../components/CardPokemon";
import { Arrow } from "../../components/Arrow";
import { FooterBar } from "../../components/FooterBar";
import { FailureScreen } from "../../components/FailureScreen";
import { CardDetails } from "../../components/CardDetails";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCallback, useEffect, useMemo, useState } from "react";
import { EvolutionApi } from "../../services/evolution";
import { ICardsPokemon } from "./types";

const Evolution = () => {
    const [searchParams] = useSearchParams();
    const [hide, setHide] = useState("false");
    const [hideFaluireScreen, setHideFaluireScreen] = useState("true")
    const [hideCard, setHideCard] = useState("true");
    const [pokemonId, setPokemonId] = useState(0);
    const [cards, setCards] = useState<ICardsPokemon[][]>([]);
    const navigate = useNavigate();

    const evolutionApi = useMemo(() => new EvolutionApi(), []);

    const handleClick = () => navigate("/");

    const getEvolution = useCallback(async () => {
        setCards([]);
        setHide("false");
        setHideFaluireScreen("true");
        const id = searchParams.get('id');

        try {
            const evolution = await evolutionApi.getPokemons(Number(id));
            setHide("true");
            setCards(evolution);
        } catch (error) {
            setHideFaluireScreen("false");
        }
    }, [evolutionApi, searchParams]);

    const showDetails = (pokeId: number) => {
        setHideCard("false");
        setPokemonId(pokeId);
    }

    const handleCloseDetails = () => setHideCard("true");

    useEffect(() => {
        getEvolution();
    }, [getEvolution]);

    return(
        <>
            <Container>
                <Title/>
                <Content>
                    <Favorites showCards={showDetails}/>
                    <Evolutions>
                        <FontAwesomeIcon onClick={handleClick} icon={faArrowLeft}/>
                        <Loader hide={hide}/>
                        {cards.map((card, index) => (
                            <>
                                {index !== 0 ? <Arrow /> : ""}
                                <EvolutionCard>
                                    {card.map((poke) => (
                                        <CardPokemon
                                            pokeId={poke.id}
                                            pokeName={poke.name}
                                            pokeImg={poke.image}
                                            pokeType={poke.type}
                                            pokeDetail={poke.details}
                                            save={evolutionApi.checkPokemonSave(poke.name)}
                                            func={showDetails}
                                        />
                                    ))}
                                </EvolutionCard>
                            </>
                        ))}
                    </Evolutions>
                </Content>
                <FooterBar/>
            </Container>
            <FailureScreen hide={hideFaluireScreen} func={getEvolution} />
            <CardDetails hideCard={hideCard} closeFunc={handleCloseDetails} pokeId={pokemonId}/>
        </>
    )
};

export { Evolution };
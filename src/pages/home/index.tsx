import { Container, Content, Cards } from "./styles";
import { Title } from "../../components/Title";
import { Favorites } from "../../components/Favorites";
import { Loader } from "../../components/Loader";
import { CardEvolution } from "../../components/CardEvolution";
import { NavBar } from "../../components/NavBar";
import { FooterBar } from "../../components/FooterBar";
import { FailureScreen } from "../../components/FailureScreen";
import { CardDetails } from "../../components/CardDetails";
import { PokeCards } from "../../services/pokeCards";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ICardsEvolution } from "./types";

const Home = () => {
    const pokeCards = useMemo(() => new PokeCards(), []);
    
    const [hide, setHide] = useState("false");
    const [hideFaluireScreen, setHideFaluireScreen] = useState("true")
    const [hideCard, setHideCard] = useState("true");
    const [pokemonId, setPokemonId] = useState(0);
    const [cards, setCards] = useState<ICardsEvolution[]>([]);

    const getEvolutions = useCallback(async () => {
        setHide("false");
        setCards([]);
        setHideFaluireScreen("true");

        try {
            const data = await pokeCards.getEvolutions();
    
            setHide("true");
            setCards(data);
        } catch (error) {
            setHideFaluireScreen("false");
        }
    }, [pokeCards]);

    const handleFirst = async () => {
        if (pokeCards.getFirstPage()) await getEvolutions();
    }

    const handlePrevius = async () => {
        if (pokeCards.getPreviusPage()) await getEvolutions();
    }

    const handleNext = async () => {
        if (pokeCards.getNextPage()) await getEvolutions();
    }

    const handleLast = async () => {
        if (pokeCards.getLastPage()) await getEvolutions();
    }

    const handlePageByUser = async (page: number) => {
        if (pokeCards.getPageByUser(page)) await getEvolutions();
    }

    const showDetails = (pokeId: number) => {
        setHideCard("false");
        setPokemonId(pokeId);
    }

    const handleCloseDetails = () => setHideCard("true");

    useEffect(() => {
        getEvolutions();
    }, [getEvolutions]);

    return(
        <>
            <Container>
                <Title/>
                <Content>
                    <Favorites renderFunc={getEvolutions} showCards={showDetails}/>
                    <Cards>
                        <Loader hide={hide}/>
                        {cards.map((card) => (
                            <CardEvolution
                                pokeId={card.pokeId}
                                pokeName={card.pokeName}
                                pokeImg={card.pokeImage}
                                types={card.pokeTypes}
                                save={pokeCards.checkEvolutionSave(card.pokeId)}
                            />
                        ))}
                    </Cards>
                    <NavBar
                        currentPage={pokeCards.page}
                        totalPages={(Math.floor(pokeCards.total / pokeCards.limit) + 1)}
                        first={handleFirst}
                        previus={handlePrevius}
                        next={handleNext}
                        last={handleLast}
                        pageUser={handlePageByUser}
                    />
                </Content>
                <FooterBar/>
            </Container>
            <FailureScreen hide={hideFaluireScreen} func={getEvolutions}/>
            <CardDetails hideCard={hideCard} closeFunc={handleCloseDetails} pokeId={pokemonId}/>
        </>
    )
};

export { Home };
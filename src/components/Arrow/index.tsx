import { ArrowContainer } from "./styles";
import arrow from "../../assets/arrow.png";

const Arrow = () => {
    return(
        <ArrowContainer>
            <img src={arrow} alt={"seta"} />
        </ArrowContainer>
    )
};

export { Arrow };
import { FalureContainer } from "./styles";
import { IFailureScreen } from "./types";

const FailureScreen = ({hide, func}: IFailureScreen) => {
    return(
        <FalureContainer hide={hide}>
            <h3>Ocorreu um erro inesperado!</h3>
            <button onClick={func}>Recarregar Página</button>
        </FalureContainer>
    )
};

export { FailureScreen };
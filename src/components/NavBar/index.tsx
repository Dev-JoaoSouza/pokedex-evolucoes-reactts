import { Navigator } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackwardFast } from "@fortawesome/free-solid-svg-icons";
import { faBackwardStep } from "@fortawesome/free-solid-svg-icons";
import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { faForwardFast } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { INavBar } from "./types";

const NavBar = ({currentPage, totalPages, first, last, previus, next, pageUser}: INavBar) => {
    const [value, setValue] = useState(currentPage)
    const inputRef = useRef<HTMLInputElement>(null);
    
    const handleFirst = () => {
        setValue(1);
        first();
    }

    const handlePrevius = () => {
        if (value > 1) {
            setValue(Number(value) - 1);
            previus();
        }
    }

    const handleNext = () => {
        if (value < totalPages) {
            setValue(Number(value) + 1);
            next();
        }
    }

    const handleLast = () => {
        setValue(totalPages);
        last()
    }

    const getPage = () => pageUser(Number(value));

    const handleKeyPress = (event: { key: string; }) => {
        if (event.key === "Enter" && inputRef.current) inputRef.current.blur();
    }

    return (
        <Navigator>
            <FontAwesomeIcon icon={faBackwardFast} onClick={handleFirst}/>
            <FontAwesomeIcon icon={faBackwardStep} onClick={handlePrevius}/>
            <input
                ref={inputRef}
                type="text"
                maxLength={2}
                value={value}
                onChange={(e) => (Number(e.target.value) || e.target.value === "") ? setValue(Number(e.target.value)) : ""}
                onBlur={getPage}
                onKeyUp={handleKeyPress}
            />
            <FontAwesomeIcon icon={faForwardStep} onClick={handleNext}/>
            <FontAwesomeIcon icon={faForwardFast} onClick={handleLast}/>
        </Navigator>
    )
}

export { NavBar }
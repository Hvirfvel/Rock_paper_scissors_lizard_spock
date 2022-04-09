import { useState } from "react";
import HandList from "../components/HandList";

const GameContainer = () => {

    const [userHand, setUserHand] = useState("");

    const hands = ["rock", "paper", "scissors", "lizard", "spock"];

    const onHandClick = (hand) => {
        setUserHand(hand);
    }

    return (
        <>
            <h2>GameContainer</h2>
            <HandList hands={hands} onHandClick={onHandClick}/>
        </>
    )
}

export default GameContainer;
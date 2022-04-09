import { useEffect, useState } from "react";
import HandList from "../components/HandList";

const GameContainer = () => {

    const [userHand, setUserHand] = useState("");
    const [computerHand, setComputerHand] = useState("");
    const [playButton, setPlayButton] = useState(false);

    const hands = ["rock", "paper", "scissors", "lizard", "spock"];

    const onHandClick = (hand) => {
        setUserHand(hand);
    }

    const handlePlayClick = () => {
        if (userHand !== "") {
            setPlayButton(true);
            getComputerHand();
        }
    }

    const getComputerHand = () => {
        const randomHandIndex = Math.floor(Math.random() * hands.length);
        const randomHand = hands[randomHandIndex];
        setComputerHand(randomHand);
    }

    return (
        <>
            <h2>GameContainer</h2>
            <HandList hands={hands} onHandClick={onHandClick}/>
            <button onClick={handlePlayClick}>Play</button>
        </>
    )
}

export default GameContainer;
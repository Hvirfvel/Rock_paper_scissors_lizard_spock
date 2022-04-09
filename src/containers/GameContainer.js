import { useEffect, useState } from "react";
import HandList from "../components/HandList";

const GameContainer = () => {

    const [userHand, setUserHand] = useState("");
    const [computerHand, setComputerHand] = useState("");
    const [playButton, setPlayButton] = useState(false);
    const [winner, setWinner] = useState("");

    const hands = ["rock", "paper", "scissors", "lizard", "spock"];
    const win_hierarchy = {
        "scissors": ["paper", "lizard"],
        "paper": ["rock", "spock"],
        "rock": ["lizard", "scissors"],
        "lizard": ["spock", "paper"],
        "spock": ["scissors", "rock"]
    }

    const onHandClick = (hand) => {
        setUserHand(hand);
    }

    const getComputerHand = () => {
        const randomHandIndex = Math.floor(Math.random() * hands.length);
        const randomHand = hands[randomHandIndex];
        setComputerHand(randomHand);
    }

    const getWinner = () => {

    }

    const handlePlayClick = () => {
        if (userHand !== "") {
            setPlayButton(true);
            getComputerHand();
            getWinner();
        }
    }

    

    return (
        <>
            <h2>GameContainer</h2>
            {!playButton ? 
            <HandList hands={hands} onHandClick={onHandClick}/> : 
            <div>
                <p>{userHand}</p>
                <p>{computerHand}</p>
            </div>}

            {!playButton ? <button onClick={handlePlayClick}>Play</button>
            : <button>Play Again</button>}

        </>
    )
}

export default GameContainer;
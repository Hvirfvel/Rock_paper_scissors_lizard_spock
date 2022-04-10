import { useEffect, useState } from "react";
import HandList from "../components/HandList";

const GameContainer = () => {

    const [userHand, setUserHand] = useState("");
    const [computerHand, setComputerHand] = useState("");
    const [playButton, setPlayButton] = useState(false);
    const [winner, setWinner] = useState("");

    const hands = ["rock", "paper", "scissors", "lizard", "spock"];
    const handsHierarchy = {
        "scissors": ["paper", "lizard"],
        "paper": ["rock", "spock"],
        "rock": ["lizard", "scissors"],
        "lizard": ["spock", "paper"],
        "spock": ["scissors", "rock"]
    }

    useEffect(() => {
        getWinner();
    }, [computerHand])

    const onHandClick = (hand) => {
        setUserHand(hand);
    }

    const getComputerHand = () => {
        const randomHandIndex = Math.floor(Math.random() * hands.length);
        const randomHand = hands[randomHandIndex];
        setComputerHand(randomHand);
    }
    

    const getWinner = () => {
        const userBeats = handsHierarchy[userHand];
        if (computerHand !== "") {
            const computerBeats = handsHierarchy[computerHand];
                if (userBeats.includes(computerHand)) {
                    setWinner({"name": "You", "hand": userHand});
                }
                else if (computerBeats.includes(userHand)) {
                    setWinner({"name": "Computer", "hand": computerHand});
                }
                else {
                    setWinner({"name": "draw", "hand": userHand});
                }

        }
    }

    const handlePlayClick = () => {
        if (userHand !== "") {
            setPlayButton(true);
            getComputerHand();
            }
        }
    
    const handlePlayAgainClick = () => {
        setPlayButton(false);
        setUserHand("");
        setComputerHand("");
        setWinner("");
    }
    

    return (
        <>
            <h1>Rock, paper, scissors, lizard, spock</h1>
            {!playButton ? 
            <HandList hands={hands} onHandClick={onHandClick}/> : 
            <div>
                {winner.name === "draw" ? <h2>It's a draw!</h2> :
                <h2>{winner.name} won!</h2>}
                <p>{userHand}</p>
                <p>{computerHand}</p>
            </div>}

            {!playButton ? <button onClick={handlePlayClick}>Play</button>
            : <button onClick={handlePlayAgainClick}>Play Again</button>}

        </>
    )
}

export default GameContainer;
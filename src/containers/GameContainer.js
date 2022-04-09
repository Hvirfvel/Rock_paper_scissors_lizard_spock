import HandList from "../components/HandList";

const GameContainer = () => {

    const hands = ["rock", "paper", "scissors", "lizard", "spock"];

    return (
        <>
            <h2>GameContainer</h2>
            <HandList hands={hands}/>
        </>
    )
}

export default GameContainer;
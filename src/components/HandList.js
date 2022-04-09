import Hand from "./Hand";

const HandList = ({hands, onHandClick}) => {

    const handNodes = hands.map((hand, index) => {
        return (<Hand hand={hand} key={index} onHandClick={onHandClick}/>)
    })

    return (
        <>
            {handNodes}
        </>
    )
}

export default HandList;
import Hand from "./Hand";

const HandList = ({hands}) => {

    const handNodes = hands.map((hand) => {
        return (<Hand hand={hand}/>)
    })

    return (
        <>
            {handNodes}
        </>
    )
}

export default HandList;
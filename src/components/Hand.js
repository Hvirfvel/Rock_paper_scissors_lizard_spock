const Hand = ({hand, onHandClick}) => {

    const handleClick = () => {
        onHandClick(hand);
    }

    return (
        <>
            <li onClick={handleClick}>{hand}</li>
        </>
    )
}

export default Hand;
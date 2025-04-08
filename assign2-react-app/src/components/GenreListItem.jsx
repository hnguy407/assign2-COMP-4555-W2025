


const GenreListItem = (props) => {
    const handleClick = () => {

    }

    return (
        <li className="box">
                <button className="button is-fullwidth"  onClick={handleClick}>
                    <span className=" font-medium">{props.genre}</span>
                </button>
        </li>
        
    )
}

export default GenreListItem
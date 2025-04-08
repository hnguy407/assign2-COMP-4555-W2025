


const GenreListItem = (props) => {
    const handleClick = () => {
        props.change_selected(props.genre)
    }
    // console.log(props)

    return (
        <li className="box">
                <button className="button is-fullwidth"  onClick={handleClick}>
                    <span className=" font-medium">{props.genre.genreName}</span>
                </button>
        </li>
        
    )
}

export default GenreListItem
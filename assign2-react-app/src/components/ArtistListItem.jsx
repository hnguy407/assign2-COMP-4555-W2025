


const ArtistListItem = (props) => {
    const handleClick = () => {

    }

    return (
        <li className="box">
                <button className="button is-fullwidth"  onClick={handleClick}>
                    <span className=" font-medium">{props.artist}</span>
                </button>
        </li>
        
    )
}

export default ArtistListItem



const ArtistListItem = (props) => {
    const handleClick = () => {
        props.change_selected(props.artist)
    }
    console.log(props)
    return (
        <li className="box">
                <button className="button is-fullwidth"  onClick={handleClick}>
                    <span className=" font-medium">{props.artist.firstName + ' ' + props.artist.lastName}</span>
                </button>
        </li>
        
    )
}

export default ArtistListItem
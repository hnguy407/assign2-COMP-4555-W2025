import ArtistListItem from "./ArtistListItem"

const ArtistList = (props) => {
    

    return (

        <div className="menu">
        <ul className="column is-multiline">
            {props.artists.map(a => 
                <ArtistListItem artist={a} change_selected={props.change_selected} />
            )}
        </ul>
        </div>
    )
}

export default ArtistList
import ArtistListItem from "./ArtistListItem"

const ArtistList = (props) => {


    return (

        <div className="menu">
        <ul className="column is-multiline">
            <ArtistListItem artist='artist1' />
            <ArtistListItem artist='artist2' />
            <ArtistListItem artist='artist3' />
            <ArtistListItem artist='artist4' />
            <ArtistListItem artist='artist5' />
        </ul>
        </div>
    )
}

export default ArtistList
import GenreListItem from "./GenreListItem"


const GenreList = (props) => {


    return (

        <div className="menu">
            <ul className="column is-multiline">
                <GenreListItem genre='Genre1' />
                <GenreListItem genre='Genre2' />
                <GenreListItem genre='Genre3' />
                <GenreListItem genre='Genre4' />
                <GenreListItem genre='Genre5' />
            </ul>
        </div>
    )
}

export default GenreList
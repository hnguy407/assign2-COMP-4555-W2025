import GenreListItem from "./GenreListItem"


const GenreList = (props) => {


    return (

        <div className="menu">
            <ul className="column is-multiline">
            {props.genres.map(g => 
                <GenreListItem genre={g} change_selected={props.change_selected} />
            )}
            </ul>
        </div>
    )
}

export default GenreList
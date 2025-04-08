
const GenreInfo = (props) => {
    // console.log(props)
    let genre = props.genre ?? {genreName:'No Genre Selected',
                                    description:'',
                                    wikiLink:'',
                                    genreId:''

    }

    const handle_click = () => {
        
    }

    

    return (
        <div className="box content">
            <h3>{genre.genreName}</h3>
            <p>{genre.description}</p>
            <a href="">{genre.wikiLink}</a>
        </div>
    )
}

export default GenreInfo
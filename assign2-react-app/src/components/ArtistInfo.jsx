


const ArtistInfo = (props) => {
    console.log(props)
    let artist = props.artist ?? {firstName:'No Artist Selected',
                                    lastName:'',
                                    nationality:'',
                                    gender:'',
                                    yearOfBirth:'',
                                    yearOfDeath:'',
                                    details:'',
                                    artistLink:'',
                                    artistId:''

    }

    const handle_click = () => {
        
    }



    return (
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">{artist.firstName + artist.lastName}</p>
            </header>
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src="null" alt="" />
                </figure>
            </div>
            <div className="card-content has-text-centered ">
                <div className="content">
                    <p className="is-size-7">{artist.nationality}</p>
                    <p>{artist.gender}</p>
                    <p>{artist.yearOfBirth} - {artist.yearOfDeath}</p>
                    <p>{artist.details}</p>
                    <p>{artist.url}</p>
                </div>
                
            </div>
            <footer className="card-footer">
                <button className="button card-footer-item">
                    <span className="icon is-small">
                        <i className="fas fa-heart" onClick={handle_click}></i>
                    </span>
                </button>
            </footer>
        </div>
    )
}

export default ArtistInfo
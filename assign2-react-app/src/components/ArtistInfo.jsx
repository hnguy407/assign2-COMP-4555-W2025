


const ArtistInfo = () => {
    

    return (
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">Artist name</p>
            </header>
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src="null" alt="" />
                </figure>
            </div>
            <div className="card-content has-text-centered ">
                <div className="content">
                    <p className="is-size-7">nationality</p>
                    <p>gender</p>
                    <p>years</p>
                    <p>details</p>
                    <p>url</p>
                </div>
                
            </div>
            <footer className="card-footer">
                <button className="button card-footer-item">
                    <span className="icon is-small">
                        <i className="fas fa-heart" ></i>
                    </span>
                </button>
            </footer>
        </div>
    )
}

export default ArtistInfo
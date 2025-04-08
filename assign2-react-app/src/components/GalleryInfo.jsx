


const GalleryInfo = () => {
    

    return (
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">Gallery name</p>
            </header>
            <div className="card-image">

            </div>
            <div className="card-content has-text-centered ">
                <div className="content">
                    <p className="is-size-7">NativeName</p>
                    <p>city</p>
                    <p>address</p>
                    <p>country</p>
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

export default GalleryInfo
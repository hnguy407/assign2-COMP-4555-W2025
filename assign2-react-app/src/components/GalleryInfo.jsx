


const GalleryInfo = (props) => {
    console.log(props)
    let gallery = props.gallery ?? {galleryName:'No Gallery Selected',
                                    galleryNativeName:'',
                                    galleryCity:'',
                                    galleryAddress:'',
                                    galleryCountry:'',
                                    galleryWebsite:'',
                                    galleryId:'',

    }

    const handle_click = () => {
        
    }
    

    return (
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">{gallery.galleryName}</p>
            </header>
            <div className="card-image">

            </div>
            <div className="card-content has-text-centered ">
                <div className="content">
                    <p className="is-size-7">{gallery.galleryNativeName}</p>
                    <p>{gallery.galleryCity}</p>
                    <p>{gallery.galleryAddress}</p>
                    <p>{gallery.galleryCountry}</p>
                    <p>{gallery.galleryWebsite}</p>
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
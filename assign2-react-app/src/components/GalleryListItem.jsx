


const GalleryListItem = (props) => {
    const handleClick = () => {
        props.change_selected(props.gallery)
    }
    console.log(props)

    return (
        <li className="box">
                <button className="button is-fullwidth"  onClick={handleClick}>
                    <span className=" font-medium">{props.gallery.galleryName}</span>
                </button>
        </li>
        
    )
}

export default GalleryListItem
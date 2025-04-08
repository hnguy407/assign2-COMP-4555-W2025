


const GalleryListItem = (props) => {
    const handleClick = () => {

    }

    return (
        <li className="box">
                <button className="button is-fullwidth"  onClick={handleClick}>
                    <span className=" font-medium">{props.gallery}</span>
                </button>
        </li>
        
    )
}

export default GalleryListItem
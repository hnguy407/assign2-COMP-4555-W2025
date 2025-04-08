import GalleryListItem from "./GalleryListItem"


const GalleryList = (props) => {
    console.log('from lists')
    console.log(props)

    return (

        <div className="menu">
        <ul className="column is-multiline">
            {props.galleries.map(g => 
                <GalleryListItem gallery={g} change_selected={props.change_selected} key={g.galleryId}/>
            )}
        </ul>
        </div>
    )
}

export default GalleryList
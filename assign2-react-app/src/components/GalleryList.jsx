import GalleryListItem from "./GalleryListItem"


const GalleryList = (props) => {


    return (

        <div className="menu">
        <ul className="column is-multiline">
            <GalleryListItem gallery='gallery1'/>
            <GalleryListItem gallery='gallery2'/>
            <GalleryListItem gallery='gallery3'/>
            <GalleryListItem gallery='gallery4'/>
            <GalleryListItem gallery='gallery5'/>
        </ul>
        </div>
    )
}

export default GalleryList
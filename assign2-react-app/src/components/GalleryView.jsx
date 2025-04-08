import GalleryList from "./GalleryList"
import GalleryInfo from "./GalleryInfo"
import PaintingList from "./PaintingList"
import { useState } from "react"

const GalleryView = (props) => {
    const [selected, set_selected] = useState(null)

    const change_selected = (gallery) => {
        set_selected(gallery)
    }

    return (       
        
        <div className="container">
    
        <div className="container">
            <h1 className="title has-text-centered">Gallery View</h1>
            <div className="columns is-8 box ">
                <div className="column is-one-quarter ">
                    <GalleryList galleries={props.galleries} change_selected={change_selected} />
                </div>

                <div className=" column middle-pane">
                    <GalleryInfo gallery={selected} />
                </div>

                <div className=" column ">
                    <PaintingList gallery={selected} filter_method='by_gallery' />
                </div>
            </div>
        </div>

    </div>
    )
}

export default GalleryView
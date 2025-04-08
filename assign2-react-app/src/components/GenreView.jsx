import GenreList from "./GenreList"
import GenreInfo from "./GenreInfo"
import PaintingList from "./PaintingList"

import { useState } from "react"

const GenreView = (props) => {
    const [selected, set_selected] = useState(null)

    const change_selected = (genre) => {
        set_selected(genre)
    }


    return (


        <div className="container">
    
            <div className="container">
                <h1 className="title has-text-centered">Genre View</h1>
                <div className="columns is-8 box ">
                    <div className="column is-one-quarter">
                        <GenreList genres={props.genres} change_selected={change_selected} />
                    </div>

                    <div className=" column middle-pane">
                        <GenreInfo genre={selected} />
                        <PaintingList genre={selected} include-sorting-header='true'/>
                    </div>

                </div>
            </div>

        </div>
            
    )
}

export default GenreView
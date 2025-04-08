import ArtistList from "./ArtistList"
import ArtistInfo from "./ArtistInfo"
import PaintingList from "./PaintingList"

import { useState } from "react"

const ArtistView = (props) => {
    const [selected, set_selected] = useState(null)

    const change_selected = (artist) => {
        set_selected(artist)
    }

    return (

        <div className="container">
    
            <div className="container">
                <h1 className="title has-text-centered">Artist View</h1>
                <div className="columns is-8 box ">
                    <div className="column is-one-quarter">
                        <ArtistList artists={props.artists} change_selected={change_selected} />
                    </div>

                    <div className=" column middle-pane">
                        <ArtistInfo artist={selected}/>
                    </div>

                    <div className=" column ">
                        <PaintingList artist={selected} filter_method='by_artist' />
                    </div>
                </div>
            </div>

        </div>
            
    )
}

export default ArtistView
import ArtistList from "./ArtistList"
import ArtistInfo from "./ArtistInfo"
import PaintingList from "./PaintingList"

const ArtistView = () => {


    return (

        <div className="container">
    
            <div className="container">
                <h1 className="title has-text-centered">Artist View</h1>
                <div className="columns is-8 box ">
                    <div className="column is-one-quarter">
                        <ArtistList />
                    </div>

                    <div className=" column middle-pane">
                        <ArtistInfo />
                    </div>

                    <div className=" column ">
                        <PaintingList />
                    </div>
                </div>
            </div>

        </div>
            
    )
}

export default ArtistView
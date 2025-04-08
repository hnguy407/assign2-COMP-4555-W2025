import GenreList from "./GenreList"
import GenreInfo from "./GenreInfo"
import PaintingList from "./PaintingList"

const GenreView = () => {


    return (


        <div className="container">
    
            <div className="container">
                <h1 className="title has-text-centered">Genre View</h1>
                <div className="columns is-8 box ">
                    <div className="column is-one-quarter">
                        <GenreList />
                    </div>

                    <div className=" column middle-pane">
                        <GenreInfo />
                        <PaintingList include-sorting-header='true'/>
                    </div>

                </div>
            </div>

        </div>
            
    )
}

export default GenreView
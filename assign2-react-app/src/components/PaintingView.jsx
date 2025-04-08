import PaintingForm from "./PaintingForm"
import PaintingList from "./PaintingList"


const PaintingView = () => {


    return (

        <div className="container">
    
            <div className="container">
                <h1 className="title has-text-centered">Painting View</h1>
                <div className="columns is-8 box ">
                    <div className="column is-one-quarter">
                        <PaintingForm />
                    </div>

                    <div className=" column middle-pane">
                        <PaintingList include-sorting-header='true'/>
                    </div>

                </div>
            </div>

        </div>


        
    )
}

export default PaintingView
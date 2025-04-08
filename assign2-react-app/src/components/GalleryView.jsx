import GalleryList from "./GalleryList"
import GalleryInfo from "./GalleryInfo"
import PaintingList from "./PaintingList"
// <!-- Main Content -->
// <div class="container">

//     <!-- Artist View Section -->
//     <div id="view-2" class="view" style="display: block;">
//         <h1 class="title has-text-centered">Artist View</h1>
//         <div class="artist-container">
//             <!-- Artist Selector Pane -->
//             <div class="artist-pane">
//                 <div class="box">
//                     <h2 class="subtitle">Select Artist</h2>
//                     <div class="field">
//                         <div class="control">
//                             <div class="select">
//                                 <select id="artist-select">
//                                     <option>Select an artist</option>
//                                     <option value="artist-1">Claude Monet</option>
//                                     <option value="artist-2">Salvador Dalí</option>
//                                     <option value="artist-3">Leonardo da Vinci</option>
//                                 </select>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <!-- Artist Info Pane -->
//             <div class="artist-info artist-pane">
//                 <div class="box">
//                     <h2 class="subtitle">Artist Info</h2>
//                     <div id="artist-info">
//                         <p>Select an artist to view information.</p>
//                     </div>
//                 </div>
//             </div>

//             <!-- Paintings List Pane -->
//             <div class="artist-pane">
//                 <div class="box">
//                     <h2 class="subtitle">Paintings</h2>
//                     <div id="paintings-list" class="paintings-list">
//                         <p>Select an artist to view their paintings.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>

// </div>

        // <div className="container">
    
        //     <div id="view-2" className="view">
        //         <h1 className="title has-text-centered">Gallery View</h1>
        //         <div className="columns">
        //             <div className="artist-pane box">
        //                 <GalleryList />
        //                 <p>???</p>
        //             </div>
    
        //             <div className="artist-info artist-pane box">
        //                 <GalleryInfo />
        //             </div>
    
        //             <div className="artist-pane box">
        //                 <PaintingList />
        //             </div>
        //         </div>
        //     </div>
    
        // </div>
        
//         <div class="columns  box">
//   <div class="column is-one-quarter has-background-light">
//     <h2 class="title is-5">Left Pane</h2>
//     <p>This could be a sidebar or navigation menu.</p>
//   </div>

//   <div class="column pane">
//     <h2 class="title is-4">Main Content</h2>
//     <p>This is your main content area.</p>
//     <p>You can add anything here like a form, table, or dashboard widgets.</p>
//   </div>

//   <div class="column is-one-quarter pane has-background-light">
//     <h2 class="title is-5">Right Pane</h2>
//     <p>This could show details, notifications, or a chat window.</p>
//   </div>
// </div>
const GalleryView = () => {


    return (       
        
        <div className="container">
    
        <div className="container">
            <h1 className="title has-text-centered">Gallery View</h1>
            <div className="columns is-8 box ">
                <div className="column is-one-quarter ">
                    <GalleryList />
                </div>

                <div className=" column middle-pane">
                    <GalleryInfo />
                </div>

                <div className=" column ">
                    <PaintingList />
                </div>
            </div>
        </div>

    </div>
    )
}

export default GalleryView



const PaintingForm = (props) => {
    const handleClick = () => {

    }
    //leave unsorted for now I dont want other pages to be sorted so ill have to make deeper copipes before i sort.
    // props.galleries.sort( (a, b) => {
    //     if(a.galleryName < b.galleryName) return -1
    //     if(a.galleryName > b.galleryName) return 1
    //     return 0
        
    //     })
    
    
    // props.genres.sort( (a, b) => {
    //     if(a.genreName < b.genreName) return -1
    //     if(a.genreName > b.genreName) return 1
    //     return 0
        
    //     })
    
    // props.artists.sort( (a, b) => {
    //     if(a.firstName < b.firstName) return -1
    //     if(a.firstName > b.firstName) return 1
    //     return 0
        
    //     })
    

    return (
        <div className="container content">
            <form action="">
            <h2>Painting Filters</h2>
            <div className="radios">
                <div className="box field">
                    <label className="radio column">
                        <input type="radio" name="rsvp" />
                        Title
                        <div className="control column"><input className='input' type="text" /></div>
                    </label>
                </div>
                <div className="box field">
                    <label className="radio column">
                        <input type="radio" name="rsvp" />
                        Artist
                        <div className="control column">
                            <div className="select is-fullwidth" >
                            <select name="" id="">
                                {props.artists.map( a => <option>{a.firstName + ' ' + a.lastName}</option> )}
                            </select></div>
                        </div>
                    </label>
                </div>
                <div className="box field">
                    <label className="radio column">
                        <input type="radio" name="rsvp" />
                        Gallery
                        <div className="control column">
                            <div className="select is-fullwidth" >
                            <select name="" id="">
                                {props.galleries.map( g => <option>{g.galleryName}</option> )}
                            </select></div>
                        </div>
                    </label>
                </div>
                <div className="box field">
                    <label className="radio column">
                        <input type="radio" name="rsvp" />
                        Genres
                        <div className="control column">
                            <div className="select is-fullwidth" >
                            <select name="" id="">
                                {props.genres.map( g => <option>{g.genreName}</option>)}
                            </select></div>
                        </div>
                    </label>
                </div>
                <div className="box field">
                    <label className="radio column">
                        <input type="radio" name="rsvp" />
                        Year
                        <div className="control column">Less Than<input className='input' type="number" /></div>
                        
                        <div className="control column">Greater Than<input className='input' type="number" /></div>
                        
                    </label>
                </div>
                <div className="field is-grouped ">
                    <div className="control">
                        <button className="button is-link">Submit</button>
                    </div>
                    <div className="control">
                        <button className="button is-link is-light">Cancel</button>
                    </div>
                </div>
            </div>


            </form>

        </div>
        
    )
}

export default PaintingForm
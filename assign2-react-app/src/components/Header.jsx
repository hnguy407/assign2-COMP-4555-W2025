


const Header = (props) => {
    const handleClick = (e) => {
        const key = e.target.value
        console.log(key)
        props.handle_view_change(key)
    }

    return (
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item" href="#">
            <strong>MySite</strong>
          </div>

        </div>
      
        <div id="navbarBasic" className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item"><button className="" onClick={handleClick} value={'artist_view'}>Artists</button></div>
            <div className="navbar-item"><button className="" onClick={handleClick} value={'painting_view'}>Paintings</button></div>
            <div className="navbar-item"><button className="" onClick={handleClick} value={'gallery_view'}>Galleries</button></div>
            <div className="navbar-item"><button className="" onClick={handleClick} value={'genre_view'}>Genres</button></div>
            <div className="navbar-item"><button className="" onClick={handleClick} value={'favourites_modal'}>Favourites</button></div>

          </div>

        </div>
      </nav>
        // <div className="container is-primary  is-flex is-justify-content-space-between ">
 
        //         <div><span >Title</span></div>
                
        //         <div >
        //             <button className="">
        //                 Art Gallery 
        //             </button>
        //             <button className="">
        //                 Art Gallery 
        //             </button>
        //             <button className="">
        //                 Art Gallery 
        //             </button>
        //         </div>
        // </div>

        
    )
}

export default Header
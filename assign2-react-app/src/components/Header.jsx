


const Header = () => {
    const handleClick = (e) => {
        console.log(e.target.value)
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
            <div className="navbar-item"><button className="" onClick={handleClick} value={'artist-view'}>Artists</button></div>
            <div className="navbar-item"><button className="" onClick={handleClick} value={'painting-view'}>Paintings</button></div>
            <div className="navbar-item"><button className="" onClick={handleClick} value={'gallery-view'}>Galleries</button></div>
            <div className="navbar-item"><button className="" onClick={handleClick} value={'genre-view'}>Genres</button></div>
            <div className="navbar-item"><button className="" onClick={handleClick} value={'favourites-modal'}>Favourites</button></div>

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
import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header'
import LoginView from './components/LoginView'
import GalleryView from './components/GalleryView'
import GenreView from './components/GenreView'
import ArtistView from './components/ArtistView'
import PaintingView from './components/PaintingView'
import FavouritesModal from './components/FavouritesModal'
import PaintingModal from './components/PaintingModal'

function App() {
  const [view_key, set_view_key] = useState('genre_view')
  const [logged_in, set_logged_in] = useState(true)
  const [favourites_modal, set_favourites_modal] = useState(false)
  const [galleries, set_galleries] = useState([])
  const [artists, set_artists] = useState([])
  const [genres, set_genres] = useState([])
  const [paintings, set_paintings] = useState([])

  
  //initializing arrays via api
  useEffect( () =>{
    selectArtists();
    if (galleries.length <= 0) {
      console.log('fetching galleries')
      fetch('https://assignment-1-comp-4513-w2025-1.onrender.com/api/galleries')
        .then( resp => resp.json())
        .then( data => set_galleries(data))
        .catch( err => console.error(err))
    }
    // if (artists.length <= 0) {
    //   console.log('fetching artists')
    //   fetch('https://assignment-1-comp-4513-w2025-1.onrender.com/api/artists')
    //     .then( resp => resp.json())
    //     .then( data => set_artists(data))
    //     .catch( err => console.error(err))
    // }
    // if (genres.length <= 0) {
    //   console.log('fetching genres')
    //   fetch('https://assignment-1-comp-4513-w2025-1.onrender.com/api/genres')
    //     .then( resp => resp.json())
    //     .then( data => set_genres(data))
    //     .catch( err => console.error(err))
    // }
  }, [])
  
  // async function selectArtists(){
  //   console.log('grabbing artists from supabase')
  //   const{data,error} = await db.from('artists').select('*')
  //   if (error) {
  //     console.error('errorfetching artists', error)
  //     return
  //   }
  //   set_artists(data)
  // }

  const handle_view_change = (key) =>{
    set_view_key(key)
  }
  const toggle_favourites_modal = () =>{
    set_favourites_modal(!favourites_modal)
  }
  const toggle_logged_in = () =>{
    set_logged_in(!logged_in)
  }



  const views = { 'login_view': <LoginView handle_view_change={handle_view_change} handle_logged_in_change={toggle_logged_in} />,
                  'gallery_view': <GalleryView galleries={galleries} />,
                  'genre_view': <GenreView genres={genres} />,
                  'artist_View': <ArtistView artists={artists} />,
                  'painting_view': <PaintingView />
  }

  return (
      <section className='container is-centered'>
        {logged_in ? <Header handle_view_change={handle_view_change} handle_modal_change={toggle_favourites_modal}/>:
                      ''}
      
      {views[view_key]}
      </section>
  )
}

export default App

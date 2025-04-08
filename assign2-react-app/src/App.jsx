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

import supabase from './db'

function App() {
  const [view_key, set_view_key] = useState('painting_view')
  const [logged_in, set_logged_in] = useState(true)
  const [favourites_modal, set_favourites_modal] = useState(false)
  const [galleries, set_galleries] = useState([])
  const [artists, set_artists] = useState([])
  const [genres, set_genres] = useState([])
  const [paintings, set_paintings] = useState([])

  
  //initializing arrays via api
  useEffect( () =>{
    selectArtists();
    selectGalleries();
    selectGenres();
  }, [])
  
  async function selectArtists(){
    console.log('grabbing artists from supabase')
    const{data,error} = await supabase.from('artists').select('*')
    if (error) {
      console.error('error fetching artists', error)
      return
    }
    set_artists(data)
  }
  async function selectGenres(){
    console.log('grabbing genres from supabase')
    const{data,error} = await supabase.from('genres').select('*')
    if (error) {
      console.error('error fetching genres', error)
      return
    }
    set_genres(data)
  }
  async function selectGalleries(){
    console.log('grabbing galleries from supabase')
    const{data,error} = await supabase.from('galleries').select('*')
    if (error) {
      console.error('error fetching galleries', error)
      return
    }
    set_galleries(data)
  }


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
                  'artist_view': <ArtistView artists={artists} />,
                  'painting_view': <PaintingView genres={genres} galleries={galleries} artists={artists} />
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

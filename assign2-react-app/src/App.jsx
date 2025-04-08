import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header'
import LoginView from './components/LoginView'
import GalleryView from './components/GalleryView'
import GenreView from './components/GenreView'
import ArtistView from './components/ArtistView'
import PaintingView from './components/PaintingView.Jsx'
import FavouritesModal from './components/FavouritesModal'
import PaintingModal from './components/PaintingModal'

function App() {
  const [count, setCount] = useState(0)

  return (
      <section className='container is-centered'>
      <Header />

      
      <PaintingView />
      <GenreView />
      <ArtistView />
      <GalleryView />
      </section>
  )
}

export default App

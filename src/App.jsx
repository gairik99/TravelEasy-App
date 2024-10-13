import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import { SingleHotel } from './components/pages/SingleHotel/SingleHotel'
import { SearchResults } from './components/pages/SearchResults/SearchResults'
import { Wishlist } from './components/pages/Wishlist/Wishlist'

function App() {


  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/hotels/:id' element={<SingleHotel />} />
      <Route path='/hotels/:address/:category' element={<SearchResults />} />
      <Route path='/wishlist' element={<Wishlist />} />
    </Routes>

  )
}

export default App

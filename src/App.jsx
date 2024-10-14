import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import { SingleHotel } from './components/pages/SingleHotel/SingleHotel'
import { SearchResults } from './components/pages/SearchResults/SearchResults'
import { Wishlist } from './components/pages/Wishlist/Wishlist'
import { Payment } from './components/pages/Payment/Payment'
import { OrderSummary } from './components/pages/OrderSummary/OrderSummary'

function App() {


  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/hotels/:id' element={<SingleHotel />} />
      <Route path='/hotels/:address/:category' element={<SearchResults />} />
      <Route path='/wishlist' element={<Wishlist />} />
      <Route path='/confirm-booking/stay/chill/:id' element={<Payment />} />
      <Route path='/order-summary' element={<OrderSummary />} />
    </Routes>

  )
}

export default App

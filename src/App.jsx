import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home/Home'
import { SingleHotel } from './components/pages/SingleHotel/SingleHotel'

function App() {


  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/hotels/:id' element={<SingleHotel />} />
    </Routes>



  )
}

export default App

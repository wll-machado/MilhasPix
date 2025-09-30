
import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import LayoutMain from './pages/LayoutMain'
import MyOffers from './pages/MyOffers'
import NewOffers from './pages/NewOffers'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutMain/>}>
          <Route path='/my-offers' element={<MyOffers/>}/>
          <Route path='/new-offers' element={<NewOffers/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

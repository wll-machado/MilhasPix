
import { BrowserRouter, Routes, Route} from 'react-router'
import './App.css'
import LayoutMain from './components/LayoutMain'
import { OffersProvider } from './context/OffersContext'
import FormStep1 from './pages/FormStep1'
import FormStep2 from './pages/FormStep2'
import FormStep3 from './pages/FormStep3'
import FormStep4 from './pages/FormStep4'
import MyOffers from './pages/MyOffers'

function App() {
  

  return (
    <BrowserRouter>
      <OffersProvider>
        <Routes>
          
          <Route path="/" element={<LayoutMain />}>
            <Route index element={<FormStep1 />} />
            <Route path="step2" element={<FormStep2 />} />
            <Route path="step3" element={<FormStep3 />} />
            <Route path="step4" element={<FormStep4 />} />
          </Route>
          
          <Route path="/minhas-ofertas" element={<MyOffers />} />
        </Routes>
      </OffersProvider>
    </BrowserRouter>
  )
}

export default App

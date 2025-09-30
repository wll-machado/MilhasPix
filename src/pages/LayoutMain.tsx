
import { Outlet } from 'react-router'
import Header from '../components/Header'

const LayoutMain = () => {
  return (
    <div className="w-full h-screen">
      <Header />
      <Outlet />
    </div>
  )
}

export default LayoutMain

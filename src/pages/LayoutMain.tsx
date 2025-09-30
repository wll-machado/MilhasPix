
import { Link, Outlet } from 'react-router'
import Header from '../components/Header'

const LayoutMain = () => {
  return (
    <div className="w-full h-screen">
      <Header />
      <div className='m-4'>
        <Link to='/my-offers' className=' p-2 border-2 rounded-lg hover:bg-slate-200'>Minhas ofertas</Link>
        <Link to='/new-offers' className=' p-2 border-2 rounded-lg hover:bg-slate-200'>Novas ofertas</Link>
         </div>
      <Outlet />
    </div>
  )
}

export default LayoutMain

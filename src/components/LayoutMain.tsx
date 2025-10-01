
import {  Outlet, useLocation } from 'react-router'
import Header from './Header'

const LayoutMain = () => {
  const location = useLocation();
  const steps = ["/cadastro", "/cadastro/step2", "/cadastro/step3", "/cadastro/step4"];
  const currentStep = steps.findIndex(step => location.pathname.startsWith(step));



  return (
    <div className="w-full h-screen">
      <Header />
      
      <div className="flex min-h-screen">
      <aside className="w-1/4 p-6 border-r bg-gray-50">
        <ul className="space-y-4">
          {steps.map((_, index) => (
            <li key={index}>
              <span
                className={`font-bold ${
                  index <= currentStep ? "text-blue-600" : "text-gray-400"
                }`}
              >
                ● Etapa {index + 1}
              </span>
            </li>
          ))}
        </ul>
      </aside>

      <main className="flex-1 p-10">
        <Outlet />
      </main>
    </div>
    </div>
  )
}

export default LayoutMain

import { Outlet, useLocation } from "react-router";
import Header from "./Header";

const LayoutMain = () => {
  const location = useLocation();
  const steps = ["/cadastro", "/cadastro/step2", "/cadastro/step3", "/cadastro/step4"];
  const stepDescriptions = [
  "Escolha a companhia aérea",
  "Oferte suas milhas",
  "Insira os dados do programa",
  "Pedido finalizado"
];
  
  const currentStep = (() => {
    for (let i = steps.length - 1; i >= 0; i--) {
      if (location.pathname.startsWith(steps[i])) {
        return i;
      }
    }
    return -1;
  })();

  return (
    <div className="w-full h-screen">
      <Header />

      <div className="containerContent">
        <div className="content">
          <aside className="dotContainer ">
          <ul className=" h-full">
                <li className="md:hidden text-[18px] font-[500] flex items-center justify-end">
                  <p> <span className="text-[#1E90FF] mr-0.5">{currentStep + 1} </span>  de {steps.length}</p>
                </li>
                {steps.map((_, index) => {
                let dotClass = "";
                let cellClass = "";
                let textClass = "";

                if (index === currentStep) {
                  dotClass = "active"; 
                  cellClass = "Cellactive";
                  
                } else if (index < currentStep) {
                  dotClass = "completed"; 
                  
                } else {
                  dotClass = "inactive"; 
                  textClass = "dotTextInactive";
                }

                return (
                  <li key={index} className={`dotCell hidden md:flex   ${cellClass}`}>
                    <span className={`dot  ${dotClass}`}>
                      <div></div>
                    </span>
                    <div className={`${textClass}`}>
                      <p className="dotText">Passo {index + 1}</p>
                      <p className="dotDescription">{stepDescriptions[index]}</p>
                    </div>
                    {index < steps.length - 1 && (
                    <div className={`line ${index < currentStep ? "lineactive" : ""}`}></div>
                  )}
                  </li>
    );
  })}
          </ul>
          </aside>

          <main className="OutletContainer">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default LayoutMain;

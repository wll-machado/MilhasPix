import { Outlet, useLocation } from "react-router";
import Header from "./Header";

const LayoutMain = () => {
  const location = useLocation();
  const steps = ["/cadastro", "/cadastro/step2", "/cadastro/step3", "/cadastro/step4"];

  // pega o último índice compatível
  const currentStep = steps.findLastIndex((step) =>
    location.pathname.startsWith(step)
  );

  return (
    <div className="w-full h-screen">
      <Header />

      <div className="flex  bg-[#FFFFFF] py-8 px-28">
        <div className="flex gap-10  h-[480px] w-full">
          <aside className="dotContainer">
          <ul className=" h-full">
                {steps.map((_, index) => {
                let dotClass = "";
                let cellClass = "";
                let lineClass = "";

                if (index === currentStep) {
                  dotClass = "active"; 
                  cellClass = "Cellactive";
                  
                } else if (index < currentStep) {
                  dotClass = "completed"; 
                  lineClass = "lineactive";
                } else {
                  dotClass = "inactive"; 
                }

    return (
      <li key={index} className={`dotCell ${cellClass}`}>
        <span className={`dot ${dotClass}`}>
          <div></div>
        </span>
        <p>Etapa {index + 1}</p>
        {/* <div className={`line ${lineClass}`}></div> */}

        {index < steps.length - 1 && (
        <div className={`line ${index < currentStep ? "lineactive" : ""}`}></div>
      )}
      </li>
    );
  })}
          </ul>
        </aside>

        <main className="flex-1 w-[936px]">
          <Outlet />
        </main>
        </div>
      </div>
    </div>
  );
};

export default LayoutMain;

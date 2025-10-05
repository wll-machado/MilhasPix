import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { NumericFormat } from "react-number-format";
import { useNavigate } from "react-router";
import axios from "axios";
import { useOffers } from "../context/OffersContext";
import Button from "../components/Button";
import Plane from "../assets/icons/Plane.svg";


interface Ranking {
  mile_value: number;
  description: string;
  position: number;
}

type FormValues = {
  valorMilheiro: string;
};

const FormStep2 = () => {
  const { data, updateData } = useOffers();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      valorMilheiro: data.valorMilheiro || "16.50", 
    },
  });

  const [rankings, setRankings] = useState<Ranking[]>([]);
  const [showAlert, setShowAlert] = useState(false);
  const [milesValue, setmilesValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    let rawValue = e.target.value.replace(/\D/g, "");
    
    rawValue = rawValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    setmilesValue(rawValue);
  };

  const fetchRanking = async (value: string) => {
  try {
    const formattedValue = value.replace(",", ".");
    const response = await axios.get(`/api/simulate-ranking?mile_value=${formattedValue}`);
    setRankings(response.data);
  } catch (error) {
    console.error("Erro ao buscar ranking:", error);
  }
};

useEffect(() => {
  fetchRanking(data.valorMilheiro || "16.50");
}, [data.valorMilheiro]);


  
  useEffect(() => {
    if (data.valorMilheiro) {
      fetchRanking(data.valorMilheiro);
    }
  }, [data.valorMilheiro]);

  const onSubmit = (values: FormValues) => {
    updateData(values);
    navigate("/step3"); 
  };

  const backToStep1 = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between w-full">
      
      <form onSubmit={handleSubmit(onSubmit)} className="form ">
        <div className="formContainer md:h-full  ">
          <div className="titleContainer">
            <span>02.</span>
            <h2 className="title flex justify-between w-full">Oferte suas milhas
              
              <h3 className={`alert  hidden ${showAlert ? "md:flex" : "hidden"}`}>Escolha entre <b>R$ 14,00</b>  e <b>R$ 16,56</b></h3> 
              
            </h2>
          </div>
          
          <h3 className="subtitle">Quero receber</h3>
          <ul className="milesRadioContainer pt-0 ">
            
            <li>
              <input type="radio" id="imediato" name="milhas" value="imediato" className="hidden peer" required />

              <label htmlFor="imediato" className="milesRadio milesRadioMilhas ">                           
              imediato
              </label>

            </li>
            <li>
              <input type="radio" id="2dias" name="milhas" value="2dias" className="hidden peer" required/>
              <label htmlFor="2dias" className="milesRadio milesRadioMilhas ">
              em 2 dias
              </label>
            </li>         

            <li>
              <input type="radio" id="7dias" name="milhas" value="7dias" className="hidden peer" required/>
              <label htmlFor="7dias" className=" milesRadio milesRadioMilhas ">
              em 7 dias
              </label>
            </li>  

            <li >
              <input type="radio" id="emvoo" name="milhas" value="emvoo" className="hidden peer" required/>
              <label htmlFor="emvoo" className="milesRadio milesRadioMilhas ">
              Depois <br />do voo
              </label>
            </li>   
          </ul>
          
          <div className="flex flex-col  md:flex-row gap-3 mb-6 px-4">
            <div className="milesContainer relative">
              <h3 className="subtitle m-0">Milhas ofertadas</h3>
              <input type="text" value={milesValue}
        onChange={handleChange} className="milesInput" required/>
              <img src={Plane} alt="plane icon" className="w-4 h-4 absolute right-3.5 top-1/2 translate-y-[25%]" />
              
            </div>

            <div className="milesContainer">
              <h3 className="subtitle m-0">Valor a cada 1.000 milhas</h3> 
              <Controller
              control={control}
              name="valorMilheiro"
              rules={{ required: true }}
              render={({ field }) => (
              <NumericFormat
              {...field}
              decimalScale={2}
              fixedDecimalScale
              thousandSeparator="."
              decimalSeparator=","
              prefix="R$ "
              placeholder="Ex: R$ 16,50"
              className={`milesInput ${showAlert ? "border-[#DC2B2B] focus:outline-[#DC2B2B] text-red-600 " : "border-black"}`}
              
              onValueChange={(values) => {
              if (values.floatValue !== undefined) {
              const realValue = values.floatValue.toFixed(2);
              field.onChange(realValue); 
              fetchRanking(realValue);   

              const num = parseFloat(realValue);
                if (num < 14 || num > 16.56) {
                  setShowAlert(true);
                } else {
                  setShowAlert(false);
                }
              }
              }}
            />
          )}
          />
          <h3 className={`alert md:hidden ${showAlert ? "flex gap-1 text-[#DC2B2B]" : "hidden"}`}>Escolha entre <b>R$ 14,00</b>  e <b>R$ 16,56</b></h3> 
            </div>

            
          </div>

          <ul className="md:hidden flex gap-1 flex-wrap mb-6 px-4">
            {rankings.map((item, index) => (
              <li
                key={index}
                className={`flex gap-1 border px-2  h-[24px] rounded-[44px] justify-start  ${item.description === "essa será sua posição" ? "bg-[#12A19A1A] border-[#12A19A]" : "border-[#E2E2E2]"}  `}
              >
                {item.description === "essa será sua posição" ? (
                  <span className="text-[#12A19A] font-[500]   h-[20px] rounded-[44px]">Você</span>
                ): ''}
                <span className={`${
          item.description === "essa será sua posição"
            ? "text-[#12A19A] "
            : "text-[#1E90FF]"
        }`}>{item.position}º</span>
                
                <span className={`font-[500] ${
          item.description === "essa será sua posição"
            ? "text-[#12A19A] "
            : ""
        }`}>R$ {item.mile_value.toFixed(2)}</span>

                
              </li>
            ))}  
          </ul>  


          <div className="flex flex-col gap-3 px-4 pb-4">
            
            <label className="flex md:gap-3 gap-2 items-center cursor-pointer">
            <input 
            type="checkbox" 
            className="toggle-input sr-only" 
            onClick={() => setToggle(!toggle)} 
            />
            <div className="toggle-switch"></div>
            <span className="toggleText">Definir média de milhas por passageiro</span>
            </label>

            <div className={toggle ? "flex gap-3 md:flex-row flex-col" : "hidden"}>
              <div className="milesContainer">
                <input type="text" placeholder="10.000" className="milesInput focus:outline-none" readOnly/>
              </div>

              <div className="milesContainer">
                <span className=" milesSpan">Melhor média para a sua oferta: 27.800</span>
              </div>
            </div>
          </div>
          
        </div>
        

        <div className="buttonContainer w-full justify-between ">
          <Button
            navigate={backToStep1}
            className={"buttonBackForm"}
            type="button"
            text={"Voltar"}
            iconPosition="left"
          />
          <Button
            className={"buttonForm"}
            type="submit"
            text={"Prosseguir"}
            iconPosition="right"
          />
        </div>
      </form>
            
      <div className=" w-full md:w-[26.72%] ">

        <div className="notificationRanking md:w-full">
        <h2 className="notificationTitle">Selecione o programa</h2>
        <p>
        Escolha de qual programa de fidelidade você quer vender suas milhas.
        Use apenas contas em seu nome.
        </p>
      </div>
      {/* Ranking */}
      <div className="md:w-full mt-6 hidden md:block">
        <h2 className="notificationTitle mb-2">Ranking das ofertas</h2>
        {rankings.length > 0 ? (
          <ul className="border border-[#E2E2E2] rounded py-2 space-y-2">
            {rankings.map((item, index) => (
              <li
                key={index}
                className="flex gap-4 border-b border-[#E2E2E2] w-full pb-1 px-4 last:border-0 last:pb-0 justify-start"
              >
                <span className={`${
          item.description === "essa será sua posição"
            ? "text-[#12A19A] "
            : "text-[#1E90FF]"
        }`}>{item.position}º</span>
                
                <span className={`font-[500] ${
          item.description === "essa será sua posição"
            ? "text-[#12A19A] "
            : ""
        }`}>R$ {item.mile_value.toFixed(2)}</span>

                {item.description === "essa será sua posição" ? (
                  <span className="text-[#12A19A]  font-[500] bg-[#12A19A1A] px-2 h-[20px] rounded-[44px]">Você</span>
                ): ''}
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum resultado encontrado.</p>
        )}
      </div>
      
      </div>
      
    </div>
    <div className="w-full flex md:justify-end ">
        <div className="mt-2 mb-[73px] flex md:flex-col flex-row md:w-[248px] w-full md:border-t-1 md:bg-white bg-[#12A19A1A] border-[#E2E2E2] text-[#12A19A]">
          <h2 className="notificationTitle  md:mt-6 md:ml-0 ml-4 mt-3 w-1/2">Receba até:</h2>
          <p className="flex md:justify-between justify-end items-center px-4 md:w-[248px] w-1/2 h-[44px] md:bg-[#12A19A1A] md:rounded-[8px] text-[20px]">
            <span>R$</span>
            <span>24.325,23</span>
          </p>
        </div>
    </div>
    
    </>
  );
};

export default FormStep2;

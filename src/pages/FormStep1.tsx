
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useOffers } from  "../context/OffersContext";
import Button from "../components/Button";
import Azul from "../assets/icons/Azul.svg";
import Air from "../assets/icons/Air.svg";
import Latam from "../assets/icons/Latam.svg";
import Smiles from "../assets/icons/Smiles.svg";

type FormValues = {
  programa: string;
  cpf: string;
  produto: string;
};

const FormStep1 = () => {
  const { data, updateData } = useOffers();
  const { register, handleSubmit} = useForm<FormValues>({
      defaultValues: {
      programa: data.programa || "",
      cpf: data.cpf || "",
      produto: data.produto || "",
    },
  });
  const navigate = useNavigate();

  const onSubmit = (values: FormValues) => {
    updateData(values);
    console.log("Step1 data:", values);
    navigate("/cadastro/step2");
  };

  return (
    <div className="flex  justify-between w-full">
    
    
    <form  onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="formContainer">
        <div className="titleContainer">
          <span>01.</span>
          <h2 className="title">Escolha o programa de fidelidade</h2>
        </div>
          
        
            <ul className="radioContainer">
                <li className="">
                  <input type="radio" id="tudoazul"  value="tudoazul"
              {...register("programa", { required: true })} className="hidden peer" required />
                  <label htmlFor="tudoazul" className="radio">                           
                      <span className="md:hidden">
                       Tudo Azul
                      </span>
                      <img className="radioImg" src={Azul} alt="logo" />
                  </label>
                </li>

                <li className="w-[22.34%]">
                  <input type="radio" id="smiles"  value="smiles"
              {...register("programa", { required: true })} className="hidden peer" required />
                  <label htmlFor="smiles"  className="radio">                           
                      <span className="md:hidden">
                       Smiles
                      </span>
                      <img className="radioImg" src={Smiles} alt="logo" />
                  </label>
                </li>

                <li className="w-[22.34%]" >
                  <input type="radio" id="latam-pass"   value="latam-pass"
              {...register("programa", { required: true })} className="hidden peer" required />
                  <label  htmlFor="latam-pass" className="radio">                           
                      <span className="md:hidden">
                       Latam Pass
                      </span>
                      <img className="radioImg" src={Latam} alt="logo" />
                  </label>
                </li>

                <li className="w-[22.34%]">
                  <input type="radio" id="airportugal"  value="airportugal"
                  {...register("programa", { required: true })} className="hidden peer" required />
                  <label htmlFor="airportugal" className="radio">                           
                      <span className="md:hidden">
                       Air Portugal
                      </span>
                      <img className="radioImg" src={Air} alt="logo" />
                  </label>
                </li>
            </ul>

        <div className="flex px-4 justify-between gap-3 h-[97px]">
                        
          <div className="w-1/2 ">
            <label className="block font-medium mb-1">Produto</label>
          <select
            {...register("produto", { required: true })}
            className="border px-4 h-11 w-full rounded-[44px] text-[#2E3D50]"
          >
            <option value="">Selecione</option>
            <option value="liminar">Liminar</option>
            <option value="outro">Comum</option>
          </select>
          </div>

          <div className="w-1/2">
            <label className="block font-medium mb-1">CPF</label>
          <input
            {...register("cpf")}
            className="border border-[#E2E2E2] px-4 h-11 w-full rounded-[44px] bg-[#F9F9F9] font-[500]"
            placeholder="Ilimitado"
            disabled
          />
          </div>
        </div>
      </div>
      
      <Button className={ "buttonForm"} type="submit" text={"Prosseguir"} 
      iconPosition="right"/>
    </form>

    <div className="p-3 bg-gray-100 rounded h-[110px] w-[26.72%]">
        <h2>Selecione o programa</h2>
        <p>
          Escolha de qual programa de fidelidade você quer vender suas milhas. Use apenas contas em seu nome.
        </p>
    </div>
    
    </div>
  )
}

export default FormStep1

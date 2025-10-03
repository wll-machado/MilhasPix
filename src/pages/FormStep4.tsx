import { useNavigate } from "react-router";
import Sucess from "../assets/icons/Sucess.svg";
import Button from "../components/Button";

const FormStep4 = () => {
const navigate = useNavigate(); 

  return (
    <div className="form w-full h-full items-center justify-center">
      <div className="formContainer flex flex-col items-center justify-center h-full">

        <img src={Sucess} alt="sucess img" />
        <div className="titleContainer flex justify-center border-b-0">
            <h2 className="title text-[#1E90FF] text-[20px] font-[500] text-center">Ordem de venda criada com sucesso!</h2>
        </div>
        <p className="text-[#2E3D50] font-[500] text-[14px] md:w-2/3 text-center mb-4">
          Agora é só aguardar — assim que suas milhas forem vendidas, o valor será transferido direto para sua conta via Pix.
        </p>

      <div className="buttonContainer w-full  md:justify-center justify-between">
        <button type="button" onClick={() => {navigate("/") }} className="buttonBackForm w-[73px] flex justify-center md:hidden">Sair</button>

        <Button className="buttonForm w-[196px] " type="button" text="Ver minhas ofertas" navigate={() => {navigate("/minhas-ofertas") }} iconPosition="right"/>
      </div>
    </div>
    </div>
  )
}

export default FormStep4

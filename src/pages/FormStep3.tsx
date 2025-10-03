import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useOffers } from "../context/OffersContext";
import Azul from "../assets/icons/Azul.svg";
import Air from "../assets/icons/Air.svg";
import Latam from "../assets/icons/Latam.svg";
import Smiles from "../assets/icons/Smiles.svg";
import Cpf from "../assets/icons/Cpf.svg";
import Locker from "../assets/icons/Locker.svg";
import Zap from "../assets/icons/Zap.svg";
import Flag from "../assets/icons/Flag.svg";
import Button from "../components/Button";

type FormValues = {
  login: string;
  senha: string;
  celular: string;
  cpf?: string;
};

const FormStep3 = () => {
  const { data, updateData } = useOffers();
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      login: data.login || "",
      senha: data.senha || "",
      celular: data.celular || "",
      cpf: data.cpf || "",
    },
  });

  const navigate = useNavigate();
  const backToStep2 = () => {
    navigate("/cadastro/step2");
  };
  const iconsMap: Record<string, string> = {
    Azul: Azul,
    Air: Air,
    Latam: Latam,
    Smiles: Smiles,
  };

  const programIcon = iconsMap[data.programa ?? ""] || "";

  const onSubmit = (values: FormValues) => {
    updateData(values);
    console.log("Step3 data:", { ...data, ...values });
    navigate("/cadastro/step4");
  };

  {
    console.log(data.programa);
     console.log(iconsMap[data.programa ?? ""])
  }
  return (
    <div className="flex flex-col md:flex-row justify-between w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="formContainer h-full ">
          <div className="titleContainer">
            <span>03.</span>
            <h2 className="title hidden md:flex justify-between w-full">
              Insira os dados do programa de fidelidade
              
                <img
                  src={programIcon}
                  alt="logo programa de fidelidade"
                  className="w-16 h-6"
                />
              
            </h2>

            <h2 className="title md:hidden flex justify-between w-full">
              Dados do programa
              
                <img
                  src={programIcon}
                  alt="logo programa de fidelidade"
                  className="w-18 h-6"
                />
              
            </h2>
          </div>

          

          <div className="dateContainer">

            <div className="dateCell">
              <label className="dateLabel">CPF do Titular</label>
              <input
                type="text"
                {...register("cpf", { required: true })}
                className="dateInput"
                placeholder="Digite seu cpf"
              />
              <img className="dateImg" src={Cpf} alt="cpf icon" />
            </div>

            <div className="dateCell">
              <label className="dateLabel">Login de acesso</label>
              <input
                type="text"
                {...register("login", { required: true })}
                className="dateInput"
                placeholder="Digite seu login"
              />
              
            </div>

            <div className="dateCell">
              <label className="dateLabel">Senha de acesso</label>
              <input
                type="password"
                {...register("senha", { required: true })}
                className="dateInput"
                placeholder="Digite sua senha"
              />
              <img className="dateImg" src={Locker} alt="cadeado icon" />
            </div>

            <div className="dateCell">
              <label className="dateLabel">CPF do Titular</label>
              <input
                type="text"
                {...register("cpf", { required: true })}
                className="dateInput"
                placeholder="Digite seu cpf"
              />
            </div>

            <div className="dateCell">
              <label className="dateLabel">Telefone para autenticação</label>
              
              <div className="relative">
                <span className="absolute flex items-center justify-center w-[66px] gap-1 rounded-[40px] bg-[#F3F3F3] translate-y-[20%] h-[32px] left-1.5">+55 <img src={Flag} alt="flag Brazil" /></span>
                <input
                  type="text"
                  {...register("celular", { required: true })}
                  className="dateInput  "
                  placeholder="(99) 99999-9999"
                />
                <img src={Zap} className="absolute right-4 top-[30%]" alt="cadeado icon" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="buttonContainer w-full justify-between ">
          <Button
            navigate={backToStep2}
            className={"buttonBackForm"}
            type="button"
            text={"Voltar"}
            iconPosition="left"
          />

          <p className="md:flex px-2 hidden text-[13px] font-[500]  justify-center items-center">Ao prosseguir você concorda com os termos de uso</p>

          <Button
            className={"buttonForm"}
            type="submit"
            text={"Prosseguir"}
            iconPosition="right"
          />
        </div>
      </form>
      
      <div className="notification mb-[70px]">
        <h2>Dados da Conta</h2>
        <p>
          Por favor, insira os dados da conta que deseja cadastrar e verifique se estão corretos.
        </p>
      </div>

      <div className="w-full flex justify-end md:hidden">
        <div className="mt-2 mb-[73px] flex md:flex-col flex-row md:w-[248px] w-full md:border-t-1 md:bg-white bg-[#12A19A1A] border-[#E2E2E2] text-[#12A19A]">
          <h2 className="notificationTitle  md:mt-6 md:ml-0 ml-4 mt-3 w-1/2">Receba até:</h2>
          <p className="flex md:justify-between justify-end items-center px-4 md:w-[248px] w-1/2 h-[44px] md:bg-[#12A19A1A] md:rounded-[8px] text-[20px]">
            <span>R$</span>
            <span>24.325,23</span>
          </p>
        </div>
    </div>
    </div>
  );
};

export default FormStep3;

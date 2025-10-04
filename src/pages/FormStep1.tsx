import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useOffers } from "../context/OffersContext";
import Button from "../components/Button";
import Azul from "../assets/icons/Azul.svg";
import Air from "../assets/icons/Air.svg";
import Latam from "../assets/icons/Latam.svg";
import Smiles from "../assets/icons/Smiles.svg";
import Clock from "../assets/icons/Clockwise.svg";
import Plus from "../assets/icons/Plus.svg";
import { useState } from "react";

type FormValues = {
  programa: string;
  cpf?: string;
  produto: string;
};

const programas = [
  { id: "Azul", label: "Tudo Azul", img: Azul },
  { id: "Smiles", label: "Smiles", img: Smiles },
  { id: "Latam", label: "Latam Pass", img: Latam },
  { id: "Air", label: "Air Portugal", img: Air },
];

const FormStep1 = () => {
  const { data, updateData } = useOffers();
  const { register, handleSubmit, setValue } = useForm<FormValues>({
    defaultValues: {
      programa: data.programa || "",
      cpf: data.cpf || "",
      produto: data.produto || "",
    },
  });
  const navigate = useNavigate();

  const [selectedPrograma, setSelectedPrograma] = useState(data.programa || "");

  const onSubmit = (values: FormValues) => {
    updateData(values);
    navigate("/step2");
  };

  
  const handleProgramaChange = (value: string) => {
    setSelectedPrograma(value);
    setValue("programa", value, { shouldValidate: true });
  };

  return (
    <div className="flex flex-col md:flex-row justify-between w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="formContainer md:h-full h-[286px]">
          <div className="titleContainer">
            <span>01.</span>
            <h2 className="title">Escolha o programa de fidelidade</h2>
          </div>

          {/* Radios */}
          <ul className="radioContainer">
            {programas.map((p) => (
              <li
                key={p.id}
                className={`${
                  selectedPrograma === p.id ? "z-50" : "z-0"
                } transition-all`}
              >
                <input
                  type="radio"
                  id={p.id}
                  value={p.id}
                  {...register("programa", { required: true })}
                  checked={selectedPrograma === p.id}
                  onChange={() => handleProgramaChange(p.id)}
                  className="hidden peer"
                  required
                />
                <label htmlFor={p.id} className="radio">
                  <img src={Clock} className="md:hidden" alt="arrows" />
                  <div>
                    <span className="md:hidden">{p.label}</span>
                    <img className="radioImg" src={p.img} alt={p.label} />
                  </div>
                </label>
              </li>
            ))}
          </ul>

          <div className="flex flex-col md:flex-row px-4  justify-between gap-3 md:h-[97px]">
            <div className="md:w-1/2 w-full">
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

            <div className="md:w-1/2 w-full">
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

        <div className="buttonContainer w-full ">
          <Button
            className={"buttonForm"}
            type="submit"
            text={"Prosseguir"}
            iconPosition="right"
          />
        </div>
      </form>

      
      <div className="md:hidden relative w-full mb-3">
        <select
          name="programaMobile"
          title="programaMobile"
          value={selectedPrograma}
          onChange={(e) => handleProgramaChange(e.target.value)}
          className="appearance-none border border-[#E2E2E2] px-4 h-11 w-full rounded-[8px] text-[#2E3D50] font-[500]"
        >
          <option value="">Selecione o programa</option>
          {programas.map((p) => (
            <option key={p.id} value={p.id}>
              {p.label}
            </option>
          ))}
        </select>

        <img
          src={Plus}
          alt="seta"
          className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
        />
      </div>

      <div className="notification">
        <h2>Selecione o programa</h2>
        <p>
          Escolha de qual programa de fidelidade você quer vender suas milhas.
          Use apenas contas em seu nome.
        </p>
      </div>
    </div>
  );
};

export default FormStep1;

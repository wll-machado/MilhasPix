
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useOffers } from  "../context/OffersContext";


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
    console.log("Form data:", values);
    navigate("/cadastro/step2");
  };

  return (
    <div className="flex justify-between">
    
    
    <form  onSubmit={handleSubmit(onSubmit)} className="flex-2 w-[52.6%]">
      <h2 className="text-2xl font-bold mb-6">Cadastro de Oferta - Etapa 1</h2>
      <div>
        <label className="block font-medium mb-2">
          Escolha o programa de fidelidade
        </label>
        <div className="grid grid-cols-2 gap-4">
          <label className="flex items-center space-x-2 border p-3 rounded cursor-pointer">
            <input
              type="radio"
              value="tudoazul"
              {...register("programa", { required: true })}
              className="accent-blue-600"
            />
            <span>TudoAzul</span>
          </label>

          <label className="flex items-center space-x-2 border p-3 rounded cursor-pointer">
            <input
              type="radio"
              value="smiles"
              {...register("programa", { required: true })}
              className="accent-blue-600"
            />
            <span>Smiles</span>
          </label>

          <label className="flex items-center space-x-2 border p-3 rounded cursor-pointer">
            <input
              type="radio"
              value="latam-pass"
              {...register("programa", { required: true })}
              className="accent-blue-600"
            />
            <span>Latam Pass</span>
          </label>

          <label className="flex items-center space-x-2 border p-3 rounded cursor-pointer">
            <input
              type="radio"
              value="tap-miles"
              {...register("programa", { required: true })}
              className="accent-blue-600"
            />
            <span>TAP Miles&Go</span>
          </label>
        </div>
      </div>

      <div>
        <label className="block font-medium mb-1">CPF</label>
        <input
          {...register("cpf")}
          className="border p-2 w-full rounded"
          placeholder="Digite o CPF"
          required
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Produto</label>
        <select
          {...register("produto", { required: true })}
          className="border p-2 w-full rounded"
        >
          <option value="">Selecione</option>
          <option value="liminar">Liminar</option>
          <option value="outro">Outro</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Avançar
      </button>
    </form>

    <div className="flex-1 p-6 bg-gray-100 ml-10 rounded">
        <h2>Selecione o programa</h2>
        <p>
          Escolha de qual programa de fidelidade você quer vender suas milhas. Use apenas contas em seu nome.
        </p>
    </div>
    
    </div>
  )
}

export default FormStep1

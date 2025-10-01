import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useOffers } from "../context/OffersContext";

type FormValues = {
  login: string;
  senha: string;
  celular: string;
};

const FormStep3 = () => {
  const { data, updateData } = useOffers();
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      login: data.login || "",
      senha: data.senha || "",
      celular: data.celular || "",
    },
  });

  const navigate = useNavigate();

  const onSubmit = (values: FormValues) => {
    updateData(values);
    console.log("Step3 data:", { ...data, ...values });
    // aqui você pode enviar para API ou ir para uma tela de resumo
    navigate("/cadastro/step4");
  };

  return (
    <div className="flex gap-6">
      {/* Formulário */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 space-y-6">
        <h2 className="text-2xl font-bold mb-6">Cadastro de Oferta - Etapa 3</h2>

        <div>
          <label className="block font-medium mb-1">Programa</label>
          <input
            value={data.programa || ""}
            readOnly
            className="border p-2 w-full rounded bg-gray-100"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">CPF</label>
          <input
            value={data.cpf || ""}
            readOnly
            className="border p-2 w-full rounded bg-gray-100"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Login</label>
          <input
            {...register("login", { required: true })}
            className="border p-2 w-full rounded"
            placeholder="Digite seu login"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Senha</label>
          <input
            type="password"
            {...register("senha", { required: true })}
            className="border p-2 w-full rounded"
            placeholder="Digite sua senha"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Celular</label>
          <input
            {...register("celular", { required: true })}
            className="border p-2 w-full rounded"
            placeholder="(00) 00000-0000"
          />
        </div>

        <button
          onClick={() => navigate("/cadastro/step2")}
          type="button"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          voltar
        </button>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Concluir
        </button>
      </form>

      {/* Resumo lateral */}
      <div className="w-1/2 p-6 bg-gray-100 rounded">
        <h2 className="text-lg font-bold mb-2">Resumo parcial</h2>
        <p>
          <strong>Programa:</strong> {data.programa}
        </p>
        <p>
          <strong>CPF:</strong> {data.cpf}
        </p>
        <p>
          <strong>Produto:</strong> {data.produto}
        </p>
        <p>
          <strong>Valor Milheiro:</strong> R$ {data.valorMilheiro}
        </p>
      </div>
    </div>
  );
};

export default FormStep3;

import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { NumericFormat } from "react-number-format";
import { useNavigate } from "react-router";
import axios from "axios";
import { useOffers } from "../context/OffersContext";

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

  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      valorMilheiro: data.valorMilheiro || "16.50", 
    },
  });

  const [rankings, setRankings] = useState<Ranking[]>([]);

  const fetchRanking = async (value: string) => {
    try {
      const formattedValue = value.replace(",", ".");
      const response = await axios.get(
        `/api/simulate-ranking?mile_value=${formattedValue}`
      );
      setRankings(response.data);
    } catch (error) {
      console.error("Erro ao buscar ranking:", error);
    }
  };

  useEffect(() => {
  fetchRanking(data.valorMilheiro || "16.50");
  }, []);

  
  useEffect(() => {
    if (data.valorMilheiro) {
      fetchRanking(data.valorMilheiro);
    }
  }, [data.valorMilheiro]);

  const onSubmit = (values: FormValues) => {
    updateData(values);
    console.log("Step2 data:", values);
    navigate("/cadastro/step3"); 
  };

  return (
    <div className="flex gap-6">
      
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 space-y-6">
        <h2 className="text-xl font-bold mb-4">Cadastro de Oferta - Etapa 2</h2>

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
              className="border p-2 w-full rounded"
              onValueChange={(values) => {
                if (values.floatValue !== undefined) {
                  const realValue = values.floatValue.toFixed(2);
                  field.onChange(realValue); 
                  fetchRanking(realValue);   
                }
              }}
            />
          )}
        />

            <button
          type="button"
          onClick={() => navigate("/cadastro")}
          className="bg-gray-400 text-black px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          voltar
        </button>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Avançar
        </button>
      </form>

      {/* Ranking */}
      <div className="w-1/2">
        <h2 className="text-xl font-bold mb-4">Ranking</h2>
        {rankings.length > 0 ? (
          <ul className="border rounded p-3 space-y-2">
            {rankings.map((item, index) => (
              <li
                key={index}
                className="flex justify-between border-b pb-1 last:border-0"
              >
                <span>{item.position}</span>
                <span>{item.description}</span>
                <span>R$ {item.mile_value.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum resultado encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default FormStep2;

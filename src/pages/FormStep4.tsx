import { useNavigate } from "react-router";


const FormStep4 = () => {
const navigate = useNavigate(); 

  return (
    <div>
        <h2>Ordem de venda criada com sucesso!</h2>
      <p>
        Agora é só aguardar — assim que suas milhas forem vendidas, o valor será transferido direto para sua conta via Pix.
      </p>

      <button type="button" onClick={() => navigate("/minhas-ofertas")}>
        Ver minhas ofertas -
      </button>
    </div>
  )
}

export default FormStep4

import { useNavigate } from "react-router";
import Header from "../components/Header";


const MyOffers = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div>
         <h2>Minhas Ofertas</h2>
      <button type="button" onClick={() => {navigate("/")}}>Criar nova oferta</button>
      </div>
      <div>
        <h2>todas as ofertas</h2>
        <input type="text" placeholder="pesquisar" />
        <select name="filtros" id="filtros" title="filtros">
          <option value="ativa">ativa</option>
          <option value="em utilização">em utilização</option>
        </select>
      </div>
    </div>
  )
}

export default MyOffers

import { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router";
import Header from "../components/Header";
import Smiles from "../assets/icons/Smilesimg.svg";
import Azul from "../assets/icons/Azulimg.svg";

const apiBaseUrl =
  import.meta.env.MODE === "development"
    ? "/api"
    : "https://api.milhaspix.com";

interface Offer {
  offerId: string;
  offerStatus: string;
  loyaltyProgram: string;
  offerType: string;
  accountLogin: string;
  createdAt: string;
  availableQuantity: number;
}

interface OffersResponse {
  totalQuantityOffers: number;
  offers: Offer[];
}
const MyOffers = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<OffersResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // estados de filtro
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
  const fetchOffers = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/simulate-offers-list`);
      setData(response.data);
    } catch (err) {
      setError("Erro ao carregar ofertas.");
      console.error("Erro ao buscar ofertas:", err);
    } finally {
      setLoading(false);
    }
  };

  fetchOffers();
}, []);


  if (loading) return <p>Carregando ofertas...</p>;
  if (error) return <p>{error}</p>;
  if (!data || data.offers.length === 0) return <p>Nenhuma oferta encontrada.</p>;

  const filteredOffers = data.offers.filter((offer) => {
    // filtro por input
    const matchesSearch =
      offer.offerId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      offer.accountLogin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      offer.loyaltyProgram.toLowerCase().includes(searchTerm.toLowerCase()) ||
      offer.offerType.toLowerCase().includes(searchTerm.toLowerCase());

    // filtro por status do select
    const matchesStatus = statusFilter
      ? offer.offerStatus.toLowerCase() === statusFilter.toLowerCase()
      : true;

    return matchesSearch && matchesStatus;
  });

  const statusClasses: Record<string, string> = {
  Ativa: "bg-green-400",
  "Em Utilizacao": "bg-[#1E90FF]",
  Inativo: "bg-gray-400",
  };

  const textClasses: Record<string, string> = {
  Ativa: "text-[#065F46]",
  "Em Utilizacao": "text-[#002040]",
  Inativo: "text-gray-400",
  };

  const bgClasses: Record<string, string> = {
  Ativa: "bg-[#D1FAE5]",
  "Em Utilizacao": "bg-[#C1D8EE]",
  Inativo: "bg-gray-200",
  };

  return (
    <div>
      <Header />
      
      <div className="desktop">

        <div className="offersHeader">
         <h2>Minhas Ofertas</h2>
          <button type="button" onClick={() => {navigate("/")}}> + Nova oferta </button>
        </div>

        <div className="offersFilter">
          <div className="filterWrapper">

            <h2>Todas ofertas</h2>

            <div className="filterContent">

              <input type="text" placeholder="Login de acesso, ID da oferta..." value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}/>
              <select name="filtros" id="filtros" title="filtros" value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}>
               <option value="">Todos</option>
              <option value="Ativa">Ativa</option>
              <option value="Em Utilizacao">Em utilização</option>
              <option value="Inativo">Inativo</option>
              </select>

            </div>

          </div>

          <div className="gridFilter">
          
            <div className="gridCell">Programa</div>
            <div className="gridCell">Status</div>
            <div className="gridCell">ID da oferta</div>
            <div className="gridCell">Login</div>
            <div className="gridCell">Milhas Ofertadas</div>
            <div className="gridCell">Data</div>

             {filteredOffers.map((offer) => (
              <>
                <div className="gridProgram">
                  <img src={offer.loyaltyProgram === "Smiles" ? Smiles : Azul} alt="icon" />
                  <div>
                    <p className={`font-bold text-[16px] ${offer.loyaltyProgram === "Smiles" ? "text-orange-500" : "text-[#40B6E6]"}`}>{offer.loyaltyProgram}</p>
                    <p className="font-[500] text-[12px]">{offer.offerType}</p>
                </div>
            </div>
            <div className="gridCellRowStatus">
              <div className={`${bgClasses[offer.offerStatus] || "bg-red-800"}`}>
                <p className={`bullet ${statusClasses[offer.offerStatus] || "bg-red-800"}`}></p>
                <p className={`${textClasses[offer.offerStatus] || "text-red-800"}`}>{offer.offerStatus}</p>
              </div>
            </div>
            <div className="gridCellRow">{offer.offerId}</div>
            <div className="gridCellRow">{offer.accountLogin}</div>
            <div className="gridCellRow">{offer.availableQuantity}</div>
            <div className="gridCellRow">{new Date(offer.createdAt).toLocaleString("pt-BR")}</div>
              </>
            ))}      

          </div>
              
           <div className="offersCard">

              {filteredOffers.map((offer) => (
                <div className="card" key={offer.offerId}>
                <div className="cardHeader">
                    <div className="flex items-center w-1/2">
                      <img src={offer.loyaltyProgram === "Smiles" ? Smiles : Azul} alt="img" className="mr-3 w-[38px] h-[38px]"/>
                      <p className={`mr-0.5 font-[700] ${offer.loyaltyProgram === "Smiles" ? "text-orange-400" : "text-[#1E90FF]"} `}>{offer.loyaltyProgram}</p>
                      <p  className=" font-[500] text-[#121212]">{offer.offerType}</p>
                    </div>

                    <div className="flex flex-col items-end  w-1/2">
                      <div className={`rounded-[10px] p-0.5 w-[110px] flex justify-center items-center gap-0.5 ${bgClasses[offer.offerStatus] || "bg-red-800"}`}>
                        <p className={`w-[8px] h-[8px]  rounded-[999px] ${statusClasses[offer.offerStatus] || "bg-red-800"}`}></p>
                        <p className={`text-[12px] ${textClasses[offer.offerStatus] || "text-red-800"}`}>{offer.offerStatus}</p>
                      </div>
                      <p className="text-[10px]">21 jun 2025</p>
                    </div>
                </div>

                <div className="cardBody">
                  <div>
                    <p className="text-[#121212] font-bold">ID da oferta</p>
                    <p>{offer.offerId}</p>
                  </div>

                  <div>
                    <p className="text-[#121212] font-bold">Login</p>
                    <p>{offer.accountLogin}</p>
                  </div>

                  <div>
                    <p className="text-[#121212] font-bold">Milhas ofertadas</p>
                    <p>{offer.availableQuantity}</p>
                  </div>
                </div>

              </div>
              ))}

              

              
           </div>   
        </div>





      </div>
      
    </div>
  )
}

export default MyOffers

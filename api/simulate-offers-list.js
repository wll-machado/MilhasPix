export default async function handler(req, res) {
  try {
    const response = await fetch(`https://api.milhaspix.com/simulate-offers-list`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Erro na rota proxy simulate-offers-list:", error);
    res.status(500).json({ error: "Erro ao buscar ofertas" });
  }
}

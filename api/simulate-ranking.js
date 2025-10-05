export default async function handler(req, res) {
  const { mile_value } = req.query;

  try {
    const response = await fetch(`https://api.milhaspix.com/simulate-ranking?mile_value=${mile_value}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Erro na rota proxy simulate-ranking:", error);
    res.status(500).json({ error: "Erro ao buscar ranking" });
  }
}

// pages/Price.jsx
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Price() {
  const { symbol } = useParams();
  const apiKey = import.meta.env.VITE_COINAPI_KEY; 
  const url = `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;  
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    async function getCoin() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCoin(data);
      } catch (e) {
        console.error(e);
      }
    }

    getCoin();
  }, [url]);

  if (!coin || !coin.rate) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>{coin.asset_id_base}/{coin.asset_id_quote}</h1>
      <h2>{coin.rate}</h2>
    </div>
  );
}

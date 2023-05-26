import axios from "axios"
import styles from '../PageCripto/PageCripto.module.css'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import loading from '../../../public/animation/loading.gif'

interface History {
    code?: string,
    bid?: string,
    high?: string,
    low?: string,
    pctChange?: number,
}

interface CoinList {
    code: string,
    bid: string,
    high: string,
    low: string,
    history: History[],
    pctChange: number,
    image: string,
}


export default function PageCripto() {
    const [ infoCoin, setInfoCoin ] = useState<CoinList>({} as CoinList)
    const [ history, setHistory ] = useState<CoinList["history"]>()
    const param = useParams()

    async function getInfoCoin() {
        const infoCoinEndpoint = `https://api-quotation.vercel.app/quotations/${param.code}`;
      
        try {
          const response = await axios.get(infoCoinEndpoint);
          const infoCoin = response.data;
          setInfoCoin(infoCoin);
          setHistory(infoCoin.history);
        } catch (error) {
          console.error('Erro ao listar as criptomoedas:', error);
        }
      }

    useEffect(() => {
        getInfoCoin();
      
        const interval = setInterval(getInfoCoin, 10000);
      
        return () => {
          clearInterval(interval);
        };
      }, []);

    console.log(history)

  return (
    <div className={styles.container}>
        { infoCoin ? (
            <div> 
                <img src={infoCoin.image} />
                {infoCoin.bid}
                {infoCoin.code}
                {history?.map((coin, index) =>{
                    return ( 
                        <div key={index}> 
                            {coin.bid}
                        </div>
                    )
                })}
            </div>
            ) : (
                <div> 
                    <img src={loading} />
                </div>
            )}
    </div>
  )
}
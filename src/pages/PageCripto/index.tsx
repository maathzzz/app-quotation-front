import axios from "axios"
import styles from '../PageCripto/PageCripto.module.css'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
// import loading from '../../../public/animation/loading.gif'

interface History {
    code?: string,
    bid?: string,
    high?: string,
    low?: string,
    pctChange?: number,
}

interface InfoCoin {
    description: string,
    code: string,
    name: string,
    bid: string,
    high: string,
    low: string,
    history: History[],
    pctChange: number,
    image: string,
}


export default function PageCripto() {
    const [ infoCoin, setInfoCoin ] = useState<InfoCoin>({} as InfoCoin)
    const [ history, setHistory ] = useState<InfoCoin["history"]>()
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
      <div className={styles.coinInfoContainer}>
        <div className={styles.coinInfoHeader}>
          <div className={styles.coinInfoTitle}>
            <h1>{infoCoin.name}</h1>
            <span>{infoCoin.code}</span>
          </div>
          <img src={infoCoin.image} />
        </div>

        <div className={styles.coinInfoBody}>
            <p> {infoCoin.description}</p>
        </div>
      </div>
    </div>
  )
}
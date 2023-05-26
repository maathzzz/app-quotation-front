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
    const [ coin ] = useState<string | undefined>(param.code)

    console.log(param)

    const formattedPercentage = infoCoin.pctChange + "%"



    async function getInfoCoin() {
        const infoCoinEndpoint = `https://api-quotation.vercel.app/quotations/${coin}`;
      
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
            <p className={styles.description}> {infoCoin.description}</p>

            <div className={styles.divider}>
            </div>

            <div className={styles.data}>
              <div className={styles.column}>
                <p> Maior (24h) </p>
                <span className={styles.prices}> {infoCoin.high} </span>
              </div>
              <div className={styles.column}>
                <p> Menor (24h) </p>
                <span className={styles.prices}> {infoCoin.low} </span>
              </div> 
              <div className={styles.column}>
                  <p> Preço Unitário </p>
                  <span className={styles.price}> {infoCoin.bid}  </span>
              </div>
              <div className={styles.column}>
                  <p> Variação </p>
                  <span className={infoCoin.pctChange >= 0 ? styles.pctChangePositive : styles.pctChangeNegative}> {formattedPercentage} </span>
              </div>
            </div>

            <div className={styles.divider}>
            </div>
        </div>
      </div>

      <div>
        <table>
          <thead>
              <tr>
                  <th> Preços </th>
                  <th> Maior </th>
                  <th> Menor </th>
                  <th> Variação </th>
              </tr>
          </thead>
          <tbody>
            {history?.map((day, index) => {
              return (
                <tr key={index}>
                  <td> {day.bid} </td>
                  <td> {day.high} </td>
                  <td> {day.low} </td>
                  <td> 
                    {day.pctChange} 
                    
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

    </div>
  )
}
import axios from "axios"
import styles from '../PageCripto/PageCripto.module.css'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import loading from '../../../public/animation/loading.gif'
// import { formatDistanceToNow } from 'date-fns'
// import { ptBR } from "date-fns/locale"

interface History {
    code?: string,
    bid?: string,
    high?: string,
    low?: string,
    pctChange?: number,
    timestamp: string,
}

interface InfoCoin {
    description: string,
    code: string,
    name: string,
    bid: number,
    high: number,
    low: number,
    history: History[],
    pctChange: number,
    image: string,
    launch: string,
}

interface colorCoinVariants {
  bitcoin: 'orange'
}


export default function PageCripto() {
    const [ infoCoin, setInfoCoin ] = useState<InfoCoin>({} as InfoCoin)
    const [ history, setHistory ] = useState<InfoCoin["history"]>()
    const [isLoading, setIsLoading] = useState(true);


    const param = useParams()
    const [ coin ] = useState<string | undefined>(param.code)

    // console.log(param)

    const formattedBid = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(infoCoin.bid)
    const formattedHigh = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(infoCoin.high)
    const formattedLow = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(infoCoin.low)
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

      useEffect(() => {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 1000);
    
        return () => {
          clearTimeout(timer);
        };
      }, []);
      console.log(infoCoin.name)
      if (isLoading) {
        return (
          <div className={styles.loading}>
            {/* <img src={loading} alt="Loading" /> */}
            <div className={styles.ldscircle}> <div style={{ background: `var(--${infoCoin.code})`}}></div></div>
          </div>
        );
      }
    // console.log(history)

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
                <span className={styles.prices}> {formattedHigh} </span>
              </div>
              <div className={styles.column}>
                <p> Menor (24h) </p>
                <span className={styles.prices}> {formattedLow} </span>
              </div> 
              <div className={styles.column}>
                  <p> Preço Unitário </p>
                  <span className={styles.price}> {formattedBid}  </span>
              </div>
              <div className={styles.column}>
                  <p> Variação </p>
                  <span className={infoCoin.pctChange >= 0 ? styles.pctChangePositive : styles.pctChangeNegative}> {formattedPercentage} </span>
              </div>
            </div>

            <div className={styles.divider}>
            </div>
            <div className={styles.coinInfoFooter}>
              <div>
                <p>Lançamento</p>
                <span>{infoCoin.launch}</span>   
              </div>
            </div>
        </div>
      </div>

      <div>
        <div className={styles.lastQuotations}>
          <h2> Últimas Cotações <strong>{infoCoin.name}</strong></h2>
        </div>
        <table>
          <thead>
              <tr>
                  <th> Preços </th>
                  <th> Maior </th>
                  <th> Menor </th>
                  <th> Variação </th>
                  <th> Data </th>
              </tr>
          </thead>
          <tbody>
            {history?.map((day, index) => {
              const formattedDate = (new Date(day.timestamp)).toLocaleDateString('pt-BR')

              // const formattedDate = formatDistanceToNow(new Date(day.timestamp), {
              //   addSuffix: true,
              //   locale: ptBR
              // })

              return (
                <tr key={index} >
                  <td > {day.bid} </td>
                  <td> {day.high} </td>
                  <td> {day.low} </td>
                  <td style={day.pctChange !== undefined && day.pctChange >= 0 ? {color: 'green', fontWeight: 'bold'} : {color: 'red', fontWeight: 'bold'}}> {day.pctChange} </td>
                  <td> {formattedDate}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

    </div>
  )
}
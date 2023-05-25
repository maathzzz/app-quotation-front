import axios from "axios"
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

    async function getInfoCoin(){
        const infoCoinEndpoint = `https://api-quotation.vercel.app/quotations/${param.code}`
    
        axios({
            method: 'get',
            url: infoCoinEndpoint,
            responseType: "json",
        },)
            .then(async response => {
            const infoCoin = await response.data;
            setInfoCoin(infoCoin)
            setHistory(infoCoin.history)
        })
            .catch(error => {
            console.error('Erro ao listar as criptomoedas:', error);
        });
    }

    useEffect(() => {
        const interval = setInterval(getInfoCoin, 5000);
          
        return () => {
            clearInterval(interval);
        };
    },)

    console.log(history)

  return (
    <div>
        { infoCoin ? (
            <div> 
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
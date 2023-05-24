import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

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

    // const history1: CoinList = {}

    useEffect(() => {
        const infoCoinEndpoint = `https://api-quotation.vercel.app/quotations/${param.code}`
    
        axios({
            method: 'get',
            url: infoCoinEndpoint,
            responseType: "json",
        },)
            .then(response => {
            const infoCoin = response.data;
            setInfoCoin(infoCoin)
        })
            .catch(error => {
            console.error('Erro ao listar as criptomoedas:', error);
        });

        setHistory(infoCoin.history)

    }, [param.code, infoCoin.history])

    console.log(history)
    // console.log(infoCoin)

  return (
    <div>
        {infoCoin.bid}
        {infoCoin.code}
        {history?.map((coin) =>{
            return ( 
                <div> 
                    {coin.bid}
                </div>
            )
        })}
    </div>
  )
}
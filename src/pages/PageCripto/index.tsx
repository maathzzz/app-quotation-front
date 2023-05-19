import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

interface CoinList {
    code: string,
    bid: string,
    high: string,
    low: string,
    pctChange: number,
    image: string,
}


export default function PageCripto() {
    const [ infoCoin, setInfoCoin ] = useState<CoinList[]>([])
    const param = useParams()
    console.log(param.code)

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

    },)

    console.log(infoCoin)


  return (
    <div>
        {param.code}
    </div>
  )
}
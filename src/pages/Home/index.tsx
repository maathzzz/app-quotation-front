import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import styles from './Home.module.css'
import axios from 'axios';
import { CoinCard } from "../../components/CoinCard";
import { Banner } from "../../components/Banner";
import loading from "../../../public/animation/loading.gif"

interface CoinList {
    code: string,
    bid: string,
    high: string,
    low: string,
    pctChange: number,
    image: string,
}

export function Home() {
    const [ coinList, setCoinList ] = useState<CoinList[]>([])
    
    useEffect(() => {
        const loginEndpoint = 'https://api-quotation.vercel.app/users/login';
    
    axios({
        method: 'post',
        url: loginEndpoint,
        data: {
            email: 'zedamanga@manga.com.bom',
            password: '12345678'
        }
    })
      .then(response => {
        const token = response.data.token;
        const coinListEndpoint = 'https://api-quotation.vercel.app/quotations/list';
    
    axios({
        method: 'get',
        url: coinListEndpoint,
        responseType: "json",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    },)
        .then(response => {
        const coinList = response.data;
        setCoinList(coinList)
    })
        .catch(error => {
        console.error('Erro ao listar as criptomoedas:', error);
    });
    })
        .catch(error => {
        console.error('Erro de autenticação:', error);
    });

    }, [coinList])

  return (
        <div className={styles.home}>
            <Header />
            <Banner />
            { coinList.length > 0 ? (
            <div className={styles.wrapper}>
                {coinList.map(coin => {
                    return (
                        <CoinCard 
                            key={coin.bid} 
                            bid={coin.bid} 
                            code={coin.code} 
                            high={coin.high} 
                            low={coin.low} 
                            pctChange={coin.pctChange}
                            image={coin.image}
                        />
                    )
                })}
            </div>
            ) : (
                <div className={styles.loading}> 
                    <img src={loading} />
                </div>
            )}
        </div>
  )
}
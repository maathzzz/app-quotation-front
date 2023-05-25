import { LinkedinLogo, InstagramLogo, TwitterLogo, DiscordLogo } from '@phosphor-icons/react'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.headerTwo}>
            <h2>Sobre nós</h2>
            <div className={styles.iconsContainer}> 
                <a href="https://www.linkedin.com/company/zuvia/" target='_blank'>
                    <LinkedinLogo size={40} weight='fill' color='#FFFF'/>
                </a>
                <a href="https://www.instagram.com/zuviatechnology/" target='_blank'>
                    <InstagramLogo size={40} weight='fill' color='#FFFF'/>
                </a>
                <a href="https://twitter.com/zuviatechnology" target='_blank'>
                    <TwitterLogo size={40} weight='fill' color='#FFFF'/>
                </a>
                <a href="https://discord.com/invite/GPN4eQUcAN" target='_blank'>
                    <DiscordLogo size={40} weight='fill' color='#FFFF'/>
                </a>
            </div>
        </div>
        <div className={styles.content}>
            <div className={styles.contentText}>
                <a href="#">FAQ</a>
                <a href="#">Blog</a>
                <a href="#">Suporte</a>
                <a href="https://app.zuviapay.com.br/">Compre moedas</a>
                <a href="https://app.zuviapay.com.br/Termo-de-Uso-ZuviaPay.html">Termos de uso</a>
                <a href="https://app.zuviapay.com.br/Pol%C3%ADtica-de-privacidade-Zuviapay.html">Politica de Privacidade</a>
                {/* <p>Zuvia Tecnologia LTDA - 48.467.826/0001-91</p>
                <p>CNPJ: 48.467.826/0001-91</p> */}
                <p>Copyright 2023 | Zuvia Crypto for Everyone.</p>
                <p>Todos os direitos reservados.</p>
            </div>
            <div className={styles.contentInput}>
                <p>Receba nossas novidades antes do mercado </p>
                <form action='post'>
                    <input type='text' name='pesquisa' placeholder='Insira seu e-mail' />
                    <button type='submit'>Entrar na lista</button>
                </form>
            </div>
        </div>
    </footer>
  )
}
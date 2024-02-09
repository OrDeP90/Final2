import React from 'react';
import comocozinha from '../components/cozinhando.png'
import styles from '../components/ajuda_profissional.module.css'
import { MudarFace } from "../faces";



function Solucao3() {
    MudarFace('09');
    return (
    <div>
        <div className={styles.titulo}>
            <span>Também sugiro seguir ou começar algum hobby</span>
        </div>
        <div className={styles.opcoes}>
            <span>Aqui estão algumas opções:</span>
        </div>
        <div className={styles.corrida}>
            <span>Culinária</span>
        </div>
        <div className={styles.luta}>
            <span>Teatro</span>
        </div>
        <div className={styles.natacao}>
            <span>Dança</span>
        </div>
        <div className={styles.academia}>
            <span>Pintura</span>
        </div>
        <div className={styles.ciclismo}>
            <span>Costura</span>
        </div>
        <div className={styles.avalie}>            
            <span><a href='/avaliacao' >AVALIE SUA EXPERIÊNCIA</a></span>
        </div>
        <div>
            <img className = {styles.mulherCozinhando} src = {comocozinha}/>
        </div>
    </div>
    
    );
  }
  
  export default Solucao3;
  
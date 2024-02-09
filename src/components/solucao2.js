import React from 'react';
import correcorre from '../components/correndo.png'
import styles from '../components/ajuda_profissional.module.css'
import seta from '../components/seta.png';
import { MudarFace } from "../faces";


function Solucao2() {
    
    MudarFace('09')

    return (
    <div>
        <div className={styles.titulo}>
            <span>Sugiro algumas atividades físicas</span>
        </div>
        <div className={styles.opcoes}>
            <span>Aqui estão algumas opções:</span>
        </div>
        <div className={styles.corrida}>
            <span>Corrida</span>
        </div>
        <div className={styles.luta}>
            <span>Luta</span>
        </div>
        <div className={styles.natacao}>
            <span>Natação</span>
        </div>
        <div className={styles.academia}>
            <span>Academia</span>
        </div>
        <div className={styles.ciclismo}>
            <span>Ciclismo</span>
        </div>
        <div>
            <img className = {styles.mulherCorrendo} src = {correcorre}/>
        </div>

        <div>
            <a href="/solucao1">
            <img className={styles.botaoSeta} src={seta}></img>
            </a>
        </div>
    </div>
    
    );
  }
  
  export default Solucao2;
  
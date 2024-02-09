import React from 'react';
import psicologo from '../components/psicologo.png'
import styles from '../components/ajuda_profissional.module.css'
import { MudarFace } from "../faces";



function Solucao1() {
    MudarFace('09');
    
    return (
    <div>
        <div className={styles.titulo}>
            <p className={styles.sugestao}><b>Sugiro ajuda profissional</b></p>
        </div>
        <div className={styles.Texto2}>
            <p className={styles.profissionais}><b>
                Aqui estão alguns 
                <br />
                profissionais recomendados 
                <br />
                em São Carlos
            </b></p>
        </div>
        <div className={styles.psicologo1}>
            <p className={styles.infoPsi1}><b>
                Carla Fernanda Simão 
                <br />
                (16) 99728-7615 
            </b></p>
        </div>
        <div className={styles.psicologo2}>
            <p className={styles.infoPsi2}><b>
                Sabrina Nishimiya
                <br />
                (17) 99617-4868
            </b></p>
        </div>
        <div className={styles.avalie}>
            <p className={styles.avalieTexto}><a href='/avaliacao' className={styles.avalieLink}>AVALIE SUA EXPERIÊNCIA</a></p>
        </div>
        <div>
            <img className = {styles.Psicologo} src = {psicologo}/>
        </div>
    </div>
    
    );
  }
  
  export default Solucao1;
  
import React from 'react';
import Imagem from './Imagem.js';
import './styles/style.css';
import Emotion from './Emotion.js';
import { MudarFace } from "../faces";

const Page3 = () => {
  MudarFace('0A');
  return (
    <div>
        <Imagem imagem="dana3.png" position='absolute' height="603px" width= "603px" top="33px" left="338px"/>
        <h7 class = "anna">PROCESSANDO...</h7>
        <Emotion/>
    </div>
  );
};

export default Page3;
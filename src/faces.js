import axios from 'axios';

const API_URL = 'http://192.168.1.100:5000/led/changeExpression/'; 

export const MudarFace = async (code) => {
    const endpoint = API_URL + code;
    await axios.get(endpoint);
}
  
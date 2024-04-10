import axios from 'axios';
import dotenv from 'dotenv';
import { IBodyPompt } from '../models/IGemini';

dotenv.config();
const url_server = '/api/tp_gemini_V1'

const customAPI = {
  Get: async () => {
    const response = await axios.get(url_server);
    return response.data;
  },
  Post: async (body:IBodyPompt) => {
    const response = await axios.post(url_server, body);
    return response.data;
  },
};

export default customAPI;

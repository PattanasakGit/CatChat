import dotenv from 'dotenv';
import { ChatHistory } from '../../../models/IGemini';
import catPersonality from './catPersonality.json';
dotenv.config();

const checkWho = (id: string): string => {
  const foundItem = catPersonality.find(item => item.id === id);
  
  if (foundItem) {
      return foundItem.personality;
  } else {
      return "ตอบฉันกลับมาแค่ 'พบข้อผิดพลาด' เท่านั้น";
  }
};

const { GoogleGenerativeAI } = require("@google/generative-ai");
const gemini_key = process.env.API_GEMINI_KEY
const genAI = new GoogleGenerativeAI(gemini_key);


export default async function run_gemini(prompt:string , history:ChatHistory , id:string): Promise<string>{
  const botPrompt = checkWho(id);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const chat = model.startChat({
    history: history
    // generationConfig: {
    //   maxOutputTokens: 100,
    // },
  });

  const messageToLLM = `บุคลิกของคุณคือ (${botPrompt}) ใช้คำลงท้ายว่า 'เหมียว' ตามความเหมาสม และห้ามอธิบายนิสัยตัวเองเด็ดขาด โดยคำนึงถึงเนื้อหาในข้อความของผู้ใช้ (${prompt}) `

  const result = await chat.sendMessage(messageToLLM);
  const response = await result.response;
  const text = response.text();
  return text;
}``
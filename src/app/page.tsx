'use client'
import React, { useEffect, useRef, useState } from "react";
import DisplayChat from "../app/componants/DispayChat";
import customAPI from "../app/componants/ServerService";
import { ChatHistory, Message } from "./models/IGemini";
import { ICat } from "./models/ICat";
import { IoSend } from "react-icons/io5";
import { IoTrashBin } from "react-icons/io5";

export default function app() {
 const [promptTextInput, setPromptTextInput] = useState<string>("");
 const [messages, setMessages] = useState<ChatHistory['history']>([]);
 const messagesEndRef = useRef<HTMLDivElement>(null);
 const [isLoading, setIsLoading] = useState(false);

 const selectedCatJSON = typeof localStorage !== 'undefined' ? localStorage.getItem('selectedCat') : null;
 const selectedCat: ICat = selectedCatJSON ? JSON.parse(selectedCatJSON) : null;


 const handlePromptChange = (event: React.ChangeEvent<HTMLInputElement>) => {
   setPromptTextInput(event.target.value);
 };

 const handleButtonClick = async () => {
   setIsLoading(true);

   const userMessage: Message = {
     role: "user",
     parts: [{ text: promptTextInput }],
   };
   setMessages(prevMessages => [...prevMessages, userMessage]);
   setPromptTextInput('');
  
   const dataToServer = { prompt: promptTextInput , history:messages , catID:selectedCat.id};
   try {
     const resultByGemini = await customAPI.Post(dataToServer);
     const assistantMessage: Message = {
       role: "model",
       parts: [{ text: resultByGemini.message }],
     };
     setMessages(prevMessages => [...prevMessages, assistantMessage]);
   } catch (error) {
     console.error('Error calling API:', error);
     setMessages(prevMessages => [...prevMessages, { role: 'model', parts: [{ text: 'An error occurred while processing your request. Please try again later.' }] }]);
   }

   setIsLoading(false);
 };

  const handleButtonClear = async () => {
   setMessages([]);
   setPromptTextInput('');
   setIsLoading(false);
 };

 const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
   if (event.key === 'Enter') {
     handleButtonClick();
   }
 };

 useEffect(() => {
   scrollToBottom();
 }, [messages]);

 const scrollToBottom = () => {
   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
 };

 return (
   <div className="w-full pt-[4rem] h-full relative">
     <div className="rounded-xl overflow-y-auto flex flex-col h-[77dvh] md:h-[83dvh] lg:h-[75dvh] xl:h-[75dvh] p-4 w-[96%] md:w-[95%] lg:w-[80%] xl:w-[75%] backdrop-blur-[3px] bg-[#00000040] mx-auto my-4">
       {messages.map((message, index) => (
         <DisplayChat key={index} message={message} index={index} />
       ))}
       <div ref={messagesEndRef} />
       {isLoading && (
         <div className="mt-8 flex mr-2">
           <iframe
             src="https://lottie.host/embed/0b548f7c-2bd2-44ae-b308-d31dc47fa04e/MrPXcjNxYL.json"
             className="w-20 h-20"
           ></iframe>
           <iframe
             src="https://lottie.host/embed/b8cb5b5e-04ca-4473-9931-0b650266d680/tsGOzw5Zi8.json"
             className="w-20 h-20"
           ></iframe>
           <iframe
             src="https://lottie.host/embed/0b548f7c-2bd2-44ae-b308-d31dc47fa04e/MrPXcjNxYL.json"
             className="w-20 h-20"
           ></iframe>
         </div>
       )}

       {messages.length === 0 && (
         <div className="flex items-end w-full h-full justify-center">
           <iframe
             src="https://lottie.host/embed/041e19b5-f282-49da-91f3-d7bf64ff3f4a/6wrnG6jRZz.json"
             className="w-full h-[30vh]"
           ></iframe>
         </div>
       )}
     </div>

     <div className="fixed bottom-[-20px] p-1.5 w-[98%] md:w-[90%] lg:w-[80%] xl:w-[70%] h-[9%] md:h-[7%] lg:h-[9%] xl:h-[9%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-xl border-3 border-stone-800 backdrop-blur-xl bg-black bg-opacity-40">
       <div className="flex items-center w-full h-full justify-center">
         <button
           className="bg-zinc-500 hover:bg-zinc-600 text-white p-1 rounded-xl h-full w-[50px] md:w-[70px] lg:w-[80px] xl:w-[90px] flex justify-center items-center"
           onClick={handleButtonClear}
         >
           <IoTrashBin />
         </button>
         <input
           className="h-full w-[85%] p-4 mx-3 border rounded-xl resize-none outline-none focus:border-yellow-900"
           placeholder="กรุณาพิมพ์ข้อความของคุณ"
           value={promptTextInput}
           onChange={handlePromptChange}
           onKeyDown={handleKeyDown}
         />
         <button
           className="bg-orange-400 hover:bg-orange-500 text-white p-1 rounded-xl h-full w-[50px] md:w-[70px] lg:w-[80px] xl:w-[90px] flex justify-center items-center"
           onClick={handleButtonClick}
         >
           <IoSend />
         </button>
       </div>
     </div>
   </div>
 );
}
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Message } from '../models/IGemini';
import {useCatStore} from '../store/CatStore';
import { catLoading } from "../store/Chats";

const DisplayChat = React.memo(({ message, index }: { message: Message, index: number }) => {
  const { selectedCat } = useCatStore();
  return (
    <>
      {message.role === "model" && (
        <div className="border-4 rounded-[1000px] w-10 mb-1">
          <img
            src={selectedCat.image}
            alt="AI Profile" className="rounded-[1000px] "
          />
        </div>
      )}
      <div
        key={index}
        className={`p-4 ${
          message.role === "user"
            ? "bg-blue-100 text-blue-800 self-end rounded-xl max-w-[80%] lg:max-w-[60%] my-4"
            : "bg-[#ffffffc5] text-gray-800 self-start rounded-xl max-w-[90%] lg:max-w-[70%]"
        }`}
      >
        {message.parts.map((part, partIndex) => (
          <ReactMarkdown key={partIndex}>{part.text}</ReactMarkdown>
        ))}
      </div>
    </>
  );
});

export default DisplayChat;

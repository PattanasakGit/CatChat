export interface IBodyPompt {
  prompt: string;
  catChatHistory?: ChatHistory;
}

export interface MessagePart {
  text: string;
}

export interface Message {
  role: "user" | "model";
  parts: MessagePart[];
}

export interface ChatHistory {
  history: Message[];
  generationConfig?: {
    maxOutputTokens?: number;
  };
}

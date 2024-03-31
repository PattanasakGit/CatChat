import { NextRequest } from 'next/server';
import run_gemini from "../tp_gemini_V1/GeminiService";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const result = await run_gemini(body.prompt, body.history, body.catID)
  return Response.json({
    message: result,
  });
}




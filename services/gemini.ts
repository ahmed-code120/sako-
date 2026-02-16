
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Safe access to API Key
const getApiKey = () => {
  try {
    return process.env.API_KEY || "";
  } catch (e) {
    return "";
  }
};

export const getGeminiResponse = async (prompt: string, context?: string): Promise<string> => {
  const apiKey = getApiKey();
  if (!apiKey) return "AI services are currently unavailable. Please check API configuration.";

  const ai = new GoogleGenAI({ apiKey });
  const model = 'gemini-3-flash-preview';

  const systemInstruction = `
    You are SAKO AI, a specialized tutor for high-end technology education.
    Context of current course: ${context || "General technology and AI education"}.
    Your goal is to provide concise, technical, and helpful guidance to students.
    If they are struggling with code, explain logic and best practices.
    Keep the tone professional, encouraging, and intelligent.
    Always format your output using Markdown.
  `;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error communicating with AI tutor. Please try again later.";
  }
};

import { GoogleGenAI } from "@google/genai";

export const askGemini = async (question) => {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY not set");
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY
    });

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `Answer the following question in ONE WORD ONLY. 
Do not use articles like "The", "A", or "An". 
Do not explain.

Question: ${question}`
            }
          ]
        }
      ]
    });

    const text = response.text?.trim();

    if (!text) {
      throw new Error("Empty response from Gemini");
    }

    return text.split(/\s+/)[0];

  } catch (error) {
    console.error("Gemini SDK Error:", error.message);
    throw new Error("AI service failed");
  }
};

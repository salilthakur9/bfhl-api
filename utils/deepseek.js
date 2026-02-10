import OpenAI from "openai";

export const askDeepSeek = async (question) => {
  try {
    if (!process.env.DEEPSEEK_API_KEY) {
      throw new Error("DEEPSEEK_API_KEY not set");
    }

    const client = new OpenAI({
      apiKey: process.env.DEEPSEEK_API_KEY,
      baseURL: "https://api.deepseek.com/v1",
    });

    const completion = await client.chat.completions.create({
      model: "deepseek-chat",
      messages: [
        {
          role: "system",
          content:
            "Answer in ONE WORD ONLY. No explanations. No articles like 'The'.",
        },
        {
          role: "user",
          content: question,
        },
      ],
      temperature: 0,
    });

    const text =
      completion?.choices?.[0]?.message?.content?.trim();

    if (!text) {
      throw new Error("Empty response from DeepSeek");
    }

    return text.split(/\s+/)[0];

  } catch (error) {
    console.error("🚨 DeepSeek Error:", error.message);
    throw new Error("AI service failed");
  }
};

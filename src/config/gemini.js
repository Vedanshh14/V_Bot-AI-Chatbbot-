import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY; // Load API key from .env which is not being tracked by git.but will be added to vercel while making site live
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const runChat = async (prompt) => {
  try {
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    return result.response.text() ; // Return the API response
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return null; // Return null in case of an error
  }
};


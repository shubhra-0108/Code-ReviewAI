const { GoogleGenAI } = require("@google/genai");

const genAI = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_KEY });

async function generateContent(prompt) {
    try {
        const result = await genAI.models.generateContent({
            model: "gemini-2.5-flash", // 🚀 Keep this updated version!
            contents: prompt
        });

        return result.text;
    } catch (error) {
        console.error("Gemini API Error:", error.message);
        
        // If the 503 high demand spike happens again, handle it gracefully here
        if (error.message.includes("503") || error.message.includes("UNAVAILABLE")) {
            throw new Error("AI servers are temporarily busy. Please try your request again in a few seconds.");
        }
        
        throw error;
    }
}

module.exports = generateContent;
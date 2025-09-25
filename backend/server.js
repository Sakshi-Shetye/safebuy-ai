// backend/server.js
import express from "express";
import cors from "cors";
import OpenAI from "openai";

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  // eslint-disable-next-line no-undef
  apiKey: process.env.OPENAI_API_KEY, // set in .env
});

app.post("/api/analyze-product", async (req, res) => {
  try {
    const { productName } = req.body;
    if (!productName) return res.status(400).json({ error: "Product name required" });

    const prompt = `
      You are an expert product safety assistant.
      Analyze the product: "${productName}".
      Output JSON in this format:
      {
        "productName": "...",
        "category": "...",
        "overallScore": 0-100,
        "overallAdvice": "Safe / Caution / Avoid",
        "ingredients": [
          { "name": "Ingredient Name", "status": "Good/Bad/Okay", "reason": "...", "ageRecommendation": "..." }
        ],
        "ageBreakdown": [
          { "label": "Infants (0-5 years)", "safe": true/false, "reason": "..." },
          { "label": "Children (6-12 years)", "safe": true/false, "reason": "..." },
          { "label": "Teenagers (13-19 years)", "safe": true/false, "reason": "..." },
          { "label": "Adults (20-60 years)", "safe": true/false, "reason": "..." },
          { "label": "Seniors (60+)", "safe": true/false, "reason": "..." }
        ]
      }
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.2,
    });

    const content = response.choices[0].message.content;
    const data = JSON.parse(content);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to analyze product" });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));

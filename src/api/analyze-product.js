// import OpenAI from "openai";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   try {
//     const { productName } = req.body;
//     if (!productName) {
//       return res.status(400).json({ error: "Product name is required" });
//     }

//     const openai = new OpenAI({
//       apiKey: process.env.OPENAI_API_KEY, // add your OpenAI key in Vercel dashboard
//     });

//     const prompt = `
//     Provide a detailed analysis of the product "${productName}".
//     Include:
//     - Ingredients list with status (Good/Okay/Bad)
//     - Reason for status
//     - Age-wise recommendations (safe/unsafe)
//     - Shelf life
//     - Alternative products if available
//     Return JSON in this structure:
//     {
//       "productName": string,
//       "category": string,
//       "overallScore": number,
//       "overallAdvice": string,
//       "ingredients": [
//         { "name": string, "status": string, "reason": string, "ageRecommendation": string }
//       ],
//       "ageBreakdown": [
//         { "label": string, "safe": boolean, "reason": string }
//       ],
//       "shelfLife": string,
//       "alternatives": [string]
//     }
//     `;

//     const completion = await openai.chat.completions.create({
//       model: "gpt-4-turbo",
//       messages: [{ role: "user", content: prompt }],
//     });

//     const data = JSON.parse(completion.choices[0].message.content);

//     res.status(200).json(data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to analyze product" });
//   }
// }

// // /api/analyze-product.js
// import OpenAI from "openai";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   try {
//     const { productName } = req.body;
//     if (!productName) {
//       return res.status(400).json({ error: "Product name is required" });
//     }

//     // Make sure your OPENAI_API_KEY is set in Vercel dashboard
//     const openai = new OpenAI({
//       apiKey: process.env.OPENAI_API_KEY,
//     });

//     const prompt = `
// Provide a detailed analysis of the product "${productName}".
// Include:
// - Ingredients list with status (Good/Okay/Bad)
// - Reason for status
// - Age-wise recommendations (safe/unsafe)
// - Shelf life
// - Alternative products if available
// Return JSON in this structure:
// {
//   "productName": string,
//   "category": string,
//   "overallScore": number,
//   "overallAdvice": string,
//   "ingredients": [
//     { "name": string, "status": string, "reason": string, "ageRecommendation": string }
//   ],
//   "ageBreakdown": [
//     { "label": string, "safe": boolean, "reason": string }
//   ],
//   "shelfLife": string,
//   "alternatives": [string]
// }
// `;

//     const completion = await openai.chat.completions.create({
//       model: "gpt-4-turbo",
//       messages: [{ role: "user", content: prompt }],
//     });

//     const data = JSON.parse(completion.choices[0].message.content);
//     res.status(200).json(data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to analyze product" });
//   }
// }





















// // /api/analyze-product.js

// export const config = {
//   runtime: "nodejs18.x", // ensures Node.js environment
// };

// import OpenAI from "openai";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   try {
//     const { productName } = req.body;
//     if (!productName) {
//       return res.status(400).json({ error: "Product name is required" });
//     }

//     // Vercel injects OPENAI_API_KEY automatically
//     // eslint-disable-next-line no-undef
//     const apiKey = process.env.OPENAI_API_KEY;
//     if (!apiKey) {
//       return res.status(500).json({ error: "OpenAI API key not set in Vercel" });
//     }

//     const openai = new OpenAI({ apiKey });

//     const prompt = `
// Provide a detailed analysis of the product "${productName}".
// Include:
// - Ingredients list with status (Good/Okay/Bad)
// - Reason for status
// - Age-wise recommendations (safe/unsafe)
// - Shelf life
// - Alternative products if available
// Return JSON in this structure:
// {
//   "productName": string,
//   "category": string,
//   "overallScore": number,
//   "overallAdvice": string,
//   "ingredients": [
//     { "name": string, "status": string, "reason": string, "ageRecommendation": string }
//   ],
//   "ageBreakdown": [
//     { "label": string, "safe": boolean, "reason": string }
//   ],
//   "shelfLife": string,
//   "alternatives": [string]
// }
// `;

//     const completion = await openai.chat.completions.create({
//       model: "gpt-4-turbo",
//       messages: [{ role: "user", content: prompt }],
//     });

//     const data = JSON.parse(completion.choices[0].message.content);

//     res.status(200).json(data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to analyze product" });
//   }
// }




// import { Configuration, OpenAIApi } from "openai";

// const configuration = new Configuration({
//   apiKey: import.meta.env.VITE_OPENAI_API_KEY, // Store your API key in .env
// });

// const openai = new OpenAIApi(configuration);

// export async function analyzeProduct(productName) {
//   const prompt = `
//     You are an expert product safety assistant.
//     Analyze the product: "${productName}".
//     Output JSON in this format:
//     {
//       "productName": "...",
//       "category": "...",
//       "overallScore": 0-100,
//       "overallAdvice": "Safe / Caution / Avoid",
//       "ingredients": [
//         { "name": "Ingredient Name", "status": "Good/Bad/Okay", "reason": "...", "ageRecommendation": "..." }
//       ],
//       "ageBreakdown": [
//         { "label": "Infants (0-5 years)", "safe": true/false, "reason": "..." },
//         { "label": "Children (6-12 years)", "safe": true/false, "reason": "..." },
//         { "label": "Teenagers (13-19 years)", "safe": true/false, "reason": "..." },
//         { "label": "Adults (20-60 years)", "safe": true/false, "reason": "..." },
//         { "label": "Seniors (60+)", "safe": true/false, "reason": "..." }
//       ]
//     }
//   `;
  
//   const response = await openai.createChatCompletion({
//     model: "gpt-4",
//     messages: [{ role: "user", content: prompt }],
//     temperature: 0.2
//   });

//   const content = response.data.choices[0].message.content;
//   return JSON.parse(content);
// }





// // src/api/analyze-product.js
// export async function analyzeProduct(productName) {
//   const response = await fetch("http://localhost:5000/api/analyze-product", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ productName }),
//   });

//   if (!response.ok) {
//     throw new Error("Failed to fetch product data");
//   }

//   return response.json();
// }





export async function analyzeProduct(productName) {
  const response = await fetch("/api/analyze-product", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productName }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch product data");
  }

  return response.json();
}










// /api/analyze-product.js
// import OpenAI from "openai";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   try {
//     const { productName } = req.body;
//     if (!productName) {
//       return res.status(400).json({ error: "Product name is required" });
//     }

//     // Make sure your OPENAI_API_KEY is set in Vercel dashboard
//     const openai = new OpenAI({
//       apiKey: process.env.OPENAI_API_KEY,
//     });

//     const prompt = `
// Provide a detailed analysis of the product "${productName}".
// Include:
// - Ingredients list with status (Good/Okay/Bad)
// - Reason for status
// - Age-wise recommendations (safe/unsafe)
// - Shelf life
// - Alternative products if available
// Return JSON in this structure:
// {
//   "productName": string,
//   "category": string,
//   "overallScore": number,
//   "overallAdvice": string,
//   "ingredients": [
//     { "name": string, "status": string, "reason": string, "ageRecommendation": string }
//   ],
//   "ageBreakdown": [
//     { "label": string, "safe": boolean, "reason": string }
//   ],
//   "shelfLife": string,
//   "alternatives": [string]
// }
// `;

//     const completion = await openai.chat.completions.create({
//       model: "gpt-4-turbo",
//       messages: [{ role: "user", content: prompt }],
//     });

//     const data = JSON.parse(completion.choices[0].message.content);
//     res.status(200).json(data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to analyze product" });
//   }
// }

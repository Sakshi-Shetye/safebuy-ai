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

//     // eslint-disable-next-line no-undef
//     const apiKey = process.env.OPENAI_API_KEY; // Set in Vercel dashboard
//     if (!apiKey) {
//       return res.status(500).json({ error: "OpenAI API key not set" });
//     }

//     const openai = new OpenAI({ apiKey });

//     const prompt = `
//       You are an expert product safety assistant.
//       Analyze the product: "${productName}".
//       Return JSON exactly in this format:
//       {
//         "productName": string,
//         "category": string,
//         "overallScore": number,
//         "overallAdvice": string,
//         "ingredients": [
//           { "name": string, "status": "Good/Okay/Bad", "reason": string, "ageRecommendation": string }
//         ],
//         "ageBreakdown": [
//           { "label": string, "safe": boolean, "reason": string }
//         ]
//       }
//     `;

//     const completion = await openai.chat.completions.create({
//       model: "gpt-4",
//       messages: [{ role: "user", content: prompt }],
//       temperature: 0.2,
//     });

//     const data = JSON.parse(completion.choices[0].message.content);
//     res.status(200).json(data);

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to analyze product" });
//   }
// }





// import OpenAI from "openai";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   try {
//     const { productName } = req.body;
//     if (!productName) return res.status(400).json({ error: "Product name required" });

//     // eslint-disable-next-line no-undef
//     const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

//     const prompt = `
//       You are an expert product safety assistant.
//       Analyze the product: "${productName}".
//       Return JSON in this format:
//       {
//         "productName": "...",
//         "category": "...",
//         "overallScore": 0-100,
//         "overallAdvice": "Safe / Caution / Avoid",
//         "ingredients": [
//           { "name": "Ingredient Name", "status": "Good/Bad/Okay", "reason": "...", "ageRecommendation": "..." }
//         ],
//         "ageBreakdown": [
//           { "label": "Infants (0-5 years)", "safe": true/false, "reason": "..." },
//           { "label": "Children (6-12 years)", "safe": true/false, "reason": "..." },
//           { "label": "Teenagers (13-19 years)", "safe": true/false, "reason": "..." },
//           { "label": "Adults (20-60 years)", "safe": true/false, "reason": "..." },
//           { "label": "Seniors (60+)", "safe": true/false, "reason": "..." }
//         ]
//       }
//     `;

//     const response = await openai.chat.completions.create({
//       model: "gpt-4",
//       messages: [{ role: "user", content: prompt }],
//       temperature: 0.2,
//     });

//     const data = JSON.parse(response.choices[0].message.content);
//     res.status(200).json(data);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to analyze product" });
//   }
// }




import OpenAI from "openai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { productName } = req.body;
    if (!productName) return res.status(400).json({ error: "Product name required" });

    const openai = new OpenAI({
      // eslint-disable-next-line no-undef
      apiKey: process.env.OPENAI_API_KEY,
    });

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

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.2,
    });

    const data = JSON.parse(completion.choices[0].message.content);
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to analyze product" });
  }
}

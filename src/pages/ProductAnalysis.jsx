import { useState } from "react";

export default function ProductAnalysis() {
  const [product, setProduct] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!product) return;
    setLoading(true);
    try {
      const res = await fetch("/api/analyzeProduct", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productName: product }),
      });
      const data = await res.json();
      setResult(data.content); // GPT message content
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">SafeBuy AI – Product Analysis</h1>
      <input
        type="text"
        placeholder="Enter product name"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />
      <button
        onClick={handleAnalyze}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {loading ? "Analyzing..." : "Analyze Product"}
      </button>

      {result && (
        <pre className="mt-6 p-4 border rounded bg-gray-100">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}




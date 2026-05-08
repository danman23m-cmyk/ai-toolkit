
import { useState } from "react";

const tools = [
  { name: "YouTube Title Generator", slug: "youtube" },
  { name: "TikTok Caption Generator", slug: "tiktok" }
];

function generate(tool, input) {
  const text = input || "topic";

  if (tool === "youtube") {
    return [
      `${text} - You Won’t Believe This`,
      `How ${text} Changed Everything`,
      `${text} Explained Simply`
    ];
  }

  if (tool === "tiktok") {
    return [
      `POV: ${text}`,
      `${text} but viral 🔥`,
      `This is ${text}`
    ];
  }

  return [];
}

export default function Home() {
  const [tool, setTool] = useState(null);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  return (
    <div style={{ padding: 20, maxWidth: 700, margin: "auto" }}>
      {!tool ? (
        <>
          <h1>AI Toolkit</h1>
          {tools.map(t => (
            <div
              key={t.slug}
              onClick={() => setTool(t.slug)}
              style={{ border: "1px solid #ccc", padding: 10, marginTop: 10, cursor: "pointer" }}
            >
              {t.name}
            </div>
          ))}
        </>
      ) : (
        <>
          <h2>{tool}</h2>

          <input
            style={{ width: "100%", padding: 10 }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter keyword"
          />

          <button onClick={() => setOutput(generate(tool, input))}>
            Generate
          </button>

          <div>
            {output.map((o, i) => (
              <p key={i}>• {o}</p>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

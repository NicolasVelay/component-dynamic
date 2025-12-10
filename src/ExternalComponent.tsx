import { useState } from "preact/hooks";

/**
 * External Component that can be dynamically loaded from a URL.
 * This component receives ViewComponentProps from the ui library.
 */
export default function ExternalComponent(props: Record<string, unknown>) {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        padding: 24,
        border: "2px dashed #6366f1",
        borderRadius: 12,
        background: "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h2 style={{ margin: "0 0 12px", color: "#4338ca" }}>
        🌐 External Component
      </h2>
      <p style={{ margin: "0 0 16px", color: "#6366f1" }}>
        This component is loaded dynamically from an external URL!
      </p>
      <div style={{ margin: "16px 0" }}>
        <button
          onClick={() => setCount((c) => c + 1)}
          style={{
            padding: "8px 16px",
            cursor: "pointer",
            background: "#4f46e5",
            color: "white",
            border: "none",
            borderRadius: 6,
            fontWeight: 600,
          }}
        >
          Local Count: {count}
        </button>
      </div>
      <details style={{ marginTop: 16 }}>
        <summary style={{ cursor: "pointer", color: "#4338ca" }}>
          Props received from parent app
        </summary>
        <pre
          style={{
            background: "#1e1b4b",
            color: "#c7d2fe",
            padding: 12,
            borderRadius: 6,
            overflow: "auto",
            fontSize: 12,
          }}
        >
          {JSON.stringify(props, null, 2)}
        </pre>
      </details>
    </div>
  );
}







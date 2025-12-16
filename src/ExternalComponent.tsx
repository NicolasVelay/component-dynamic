/**
 * External Component that can be dynamically loaded from a URL.
 * This component receives ViewComponentProps from the ui library.
 *
 * Note: This component is stateless because it bundles its own Preact,
 * which would conflict with the parent app's Preact when using hooks.
 */
export default function ExternalComponent(props: Record<string, unknown>) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        padding: 16,
        border: "1px solid #22c55e",
        borderRadius: 4,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h2 style={{ margin: "0 0 12px", color: "#22c55e" }}>
        External Component
      </h2>
      <p style={{ margin: "0 0 16px", color: "#16a34a" }}>
        This component is loaded dynamically from an external URL!
      </p>
      <details style={{ marginTop: 16 }} open>
        <summary style={{ cursor: "pointer", color: "#22c55e" }}>
          Props received from parent app
        </summary>
        <pre
          style={{
            background: "#f0fdf4",
            color: "#166534",
            padding: 12,
            borderRadius: 4,
            overflow: "auto",
            fontSize: 12,
            marginTop: 8,
          }}
        >
          {JSON.stringify(props, null, 2)}
        </pre>
      </details>
    </div>
  );
}







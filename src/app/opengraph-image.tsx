import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Karthik Suresh portfolio";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(135deg, rgba(244,240,232,1) 0%, rgba(224,233,224,1) 55%, rgba(244,230,216,1) 100%)",
          color: "#141312",
          padding: 56,
          fontFamily: "Georgia, serif"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            borderRadius: 40,
            border: "1px solid rgba(20,19,18,0.08)",
            background: "rgba(255,255,255,0.72)",
            padding: 48
          }}
        >
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#725f4f"
            }}
          >
            Premium full-stack portfolio
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ fontSize: 72, lineHeight: 1.04 }}>Karthik Suresh</div>
            <div style={{ fontSize: 28, lineHeight: 1.5, maxWidth: 860, fontFamily: "Arial" }}>
              Story-driven case studies, premium product-site aesthetics, and a frontend-first engineering brand.
            </div>
          </div>
          <div style={{ display: "flex", gap: 18, fontSize: 22, fontFamily: "Arial", color: "#35493f" }}>
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Motion</span>
            <span>Case studies</span>
          </div>
        </div>
      </div>
    ),
    size
  );
}

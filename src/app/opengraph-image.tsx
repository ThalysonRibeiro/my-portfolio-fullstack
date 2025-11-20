import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f0f12 0%, #1a1a1f 50%, #2a0e0e 100%)"
        }}
      >
        <div
          style={{
            width: "90%",
            height: "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 48,
            borderRadius: 24,
            background: "rgba(12,12,15,0.6)",
            border: "1px solid rgba(255,255,255,0.12)"
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontSize: 64, color: "#ffffff", fontWeight: 800 }}>Thalyson Rafael</div>
            <div style={{ fontSize: 28, color: "#d1d5db", fontWeight: 600 }}>Full Stack Developer</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ fontSize: 24, color: "#e5e7eb" }}>
              Transformo ideias em experiências digitais envolventes
            </div>
            <div
              style={{
                width: "100%",
                height: 8,
                background: "linear-gradient(90deg, #ef4444, #f97316)",
                borderRadius: 9999
              }}
            />
          </div>
        </div>
      </div>
    ),
    {
      width: size.width,
      height: size.height
    }
  );
}
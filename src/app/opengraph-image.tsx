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
            width: "92%",
            height: "82%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 36,
            padding: 48,
            borderRadius: 28,
            background: "rgba(12,12,15,0.6)",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
          }}
        >
          <div
            style={{
              width: 200,
              height: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 9999,
              background: "linear-gradient(135deg, #ef4444 0%, #f97316 100%)",
              border: "6px solid rgba(255,255,255,0.08)",
              boxShadow: "0 10px 30px rgba(239,68,68,0.35)"
            }}
          >
            <div
              style={{
                width: 170,
                height: 170,
                borderRadius: 9999,
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15), rgba(255,255,255,0.02))"
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 18, flex: 1 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ fontSize: 72, color: "#ffffff", fontWeight: 800 }}>Thalyson Rafael</div>
              <div style={{ fontSize: 30, color: "#d1d5db", fontWeight: 600 }}>Full Stack Developer</div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ fontSize: 26, color: "#e5e7eb" }}>
                Transformo ideias em experiências digitais envolventes
              </div>
              <div
                style={{
                  width: "100%",
                  height: 10,
                  background: "linear-gradient(90deg, #ef4444, #f97316)",
                  borderRadius: 9999
                }}
              />
            </div>
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
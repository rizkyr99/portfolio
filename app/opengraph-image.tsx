import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const runtime = "edge";
export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background:
            "radial-gradient(ellipse at center, #D99A3C 0%, #A85E1E 45%, #6B3410 75%, #1A0A05 100%)",
          color: "#F5EEE4",
          fontFamily: "serif",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 18,
            letterSpacing: 8,
            textTransform: "uppercase",
            opacity: 0.8,
            marginBottom: 20,
          }}
        >
          Portfolio
        </div>
        <div
          style={{
            fontSize: 120,
            fontWeight: 300,
            lineHeight: 1,
            textAlign: "center",
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            fontSize: 32,
            fontStyle: "italic",
            marginTop: 20,
            color: "#E8B87B",
          }}
        >
          {profile.title}
        </div>
      </div>
    ),
    { ...size }
  );
}

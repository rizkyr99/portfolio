import { ImageResponse } from "next/og";
import { fetchPost } from "@/lib/queries";
import { profile } from "@/content/profile";

export const runtime = "edge";
export const size = { width: 1200, height: 1200 };
export const contentType = "image/png";

export default async function OG({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await fetchPost(slug);

  const title = post?.title ?? "Post";
  const date = post?.date ?? "";
  const readingTime = post?.readingTime ?? 0;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(ellipse at center, #D99A3C 0%, #A85E1E 45%, #6B3410 75%, #1A0A05 100%)",
          color: "#F5EEE4",
          fontFamily: "serif",
          padding: "80px",
        }}
      >
        {/* top label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            opacity: 0.75,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#E8B87B",
            }}
          />
          <span
            style={{
              fontSize: 14,
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            {profile.name} · Writing
          </span>
        </div>

        {/* title */}
        <div
          style={{
            fontSize: title.length > 50 ? 56 : 72,
            fontWeight: 300,
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          {title}
        </div>

        {/* bottom meta */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontSize: 16,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#E8B87B",
          }}
        >
          {date && <span>{date}</span>}
          {readingTime > 0 && (
            <>
              <span style={{ opacity: 0.5 }}>·</span>
              <span>{readingTime} min read</span>
            </>
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}

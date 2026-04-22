import { ImageResponse } from "next/og";
import { fetchProjects } from "@/lib/queries";
import { profile } from "@/content/profile";

export const runtime = "edge";
export const size = { width: 1200, height: 1200 };
export const contentType = "image/png";

function deslugify(slug: string) {
  return slug.replaceAll("-", " ");
}

export default async function OG({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projects = await fetchProjects();

  const project = projects.find(
    (p) =>
      p.title
        .toLowerCase()
        .replaceAll("&", "and")
        .replaceAll(/[^a-z0-9]+/g, "-")
        .replaceAll(/(^-|-$)/g, "") === slug
  ) ?? null;

  const title = project?.title ?? deslugify(slug);
  const tags = project?.tags?.slice(0, 5) ?? [];
  const year = project?.year ?? "";
  const category = project?.category ?? "";

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
            {profile.name} · Case Study
          </span>
        </div>

        {/* title */}
        <div
          style={{
            fontSize: title.length > 40 ? 64 : 80,
            fontWeight: 300,
            lineHeight: 1.05,
            maxWidth: 900,
          }}
        >
          {title}
        </div>

        {/* bottom: tags + meta */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* tags */}
          <div style={{ display: "flex", gap: 10 }}>
            {tags.map((tag) => (
              <div
                key={tag}
                style={{
                  fontSize: 13,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  padding: "6px 14px",
                  borderRadius: 999,
                  border: "1px solid rgba(232,184,123,0.4)",
                  color: "#E8B87B",
                }}
              >
                {tag}
              </div>
            ))}
          </div>

          {/* year + category */}
          <div
            style={{
              fontSize: 14,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#E8B87B",
              opacity: 0.75,
              display: "flex",
              gap: 12,
            }}
          >
            {year && <span>{year}</span>}
            {category && (
              <>
                <span style={{ opacity: 0.5 }}>·</span>
                <span>{category}</span>
              </>
            )}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

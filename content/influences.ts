export type Influence = {
  name: string;
  kind: "musician" | "engineer" | "writer";
  why?: string;
};

// TODO: edit to taste
export const influences: Influence[] = [
  { name: "Frank Iero", kind: "musician", why: "raw emotion over technical perfection" },
  { name: "Synyster Gates", kind: "musician", why: "precision and theory in service of feeling" },
  { name: "Matt Bellamy", kind: "musician", why: "orchestral thinking inside a rock band" },
  { name: "Thom Yorke", kind: "musician", why: "tension as texture" },
  { name: "Linus Torvalds", kind: "engineer", why: "build the tool you need, then give it away" },
];

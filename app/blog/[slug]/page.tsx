import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { fetchPost, fetchPosts } from "@/lib/queries";
import { StringDivider } from "@/components/ui/StringDivider";

export async function generateStaticParams() {
  const posts = await fetchPosts();
  return posts.map((p: { slug: string }) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ readonly slug: string }>;
}) {
  const { slug } = await params;
  const post = await fetchPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ readonly slug: string }>;
}) {
  const { slug } = await params;
  const post = await fetchPost(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-cream px-6 py-24">
      <article className="mx-auto max-w-2xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-rosewood/70 hover:text-rosewood"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> All posts
        </Link>

        <h1 className="mt-6 font-display text-4xl sm:text-5xl text-rosewood font-light tracking-tight leading-tight">
          {post.title}
        </h1>
        <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-rosewood/50">
          {post.date}
        </p>

        <StringDivider className="my-10 opacity-50" />

        <div className="prose-content text-rosewood/85 text-[17px] leading-[1.75] space-y-5 [&>h2]:font-display [&>h2]:text-2xl [&>h2]:text-rosewood [&>h2]:mt-10 [&>h2]:mb-3 [&>h3]:font-display [&>h3]:text-xl [&>h3]:text-rosewood [&>h3]:mt-8 [&>h3]:mb-2 [&>a]:text-sunburst-amber [&>a]:underline [&>a]:underline-offset-4 [&>code]:font-mono [&>code]:text-[0.9em] [&>code]:bg-rosewood/5 [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:rounded [&_pre]:bg-rosewood [&_pre]:text-cream [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&>blockquote]:border-l-2 [&>blockquote]:border-butterscotch [&>blockquote]:pl-4 [&>blockquote]:italic">
          <PortableText value={post.content ?? []} />
        </div>
      </article>
    </main>
  );
}

import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Kelvin Ng'eno`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <main className="min-h-screen pt-28 pb-20">
      <article className="container mx-auto px-6 max-w-3xl">
        {/* Back link */}
        <Link
          href="/blog"
          className="text-sm text-gray-500 hover:text-lime-light transition-colors mb-8 inline-block"
        >
          &larr; All posts
        </Link>

        {/* Header */}
        <header className="mt-4 mb-12">
          <h1 className="text-h1 font-display text-white">{post.title}</h1>
          <div className="flex items-center gap-3 mt-4">
            <span className="text-sm text-gray-500">{post.readingTime}</span>
            {post.tags.length > 0 && (
              <>
                <span className="text-gray-700">&middot;</span>
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-surface-light border border-lime-default/10 text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-invert prose-blog">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </main>
  );
}

import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { FaFileDownload } from "react-icons/fa";

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
    <div className="min-h-screen bg-surface-dark text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-sm border-b bg-surface-dark/95 border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-base md:text-xl font-semibold text-white"
          >
            Kelvin Ng&apos;eno
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/blog"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Blog
            </Link>
            <a
              href="mailto:hello@ngenondumia.com"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href="https://docs.google.com/document/d/1MySvsINyYvUlBZZWAD6rRAUzhaXeXyVnSp6zZeVJy6E/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm rounded bg-white/10 hover:bg-white/20 transition-colors"
            >
              <FaFileDownload className="w-3 h-3" />
              Resume
            </a>
          </div>
        </div>
      </header>

      <main className="pt-16 pb-20">
        <article className="max-w-3xl mx-auto px-6">
          {/* Back link */}
          <Link
            href="/blog"
            className="text-sm text-gray-500 hover:text-white transition-colors mb-8 inline-block"
          >
            &larr; All posts
          </Link>

          {/* Header */}
          <header className="mt-4 mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 mt-4">
              <span className="text-sm text-gray-500">{post.readingTime}</span>
              {post.tags.length > 0 && (
                <>
                  <span className="text-gray-700">&middot;</span>
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400"
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
          <div className="prose prose-invert prose-blog max-w-none">
            <MDXRemote
              source={post.content}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Kelvin Ng&apos;eno. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

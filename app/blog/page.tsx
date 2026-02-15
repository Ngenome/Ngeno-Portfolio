import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Kelvin Ng'eno",
  description:
    "Writing about AI-assisted development, frontend architecture, and building software in East Africa.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Header */}
        <div className="mb-16">
          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-lime-light transition-colors mb-8 inline-block"
          >
            &larr; Back
          </Link>
          <h1 className="text-h1 font-display text-white mt-4">Blog</h1>
          <p className="text-gray-400 text-body mt-4 max-w-xl">
            On AI-assisted development, frontend architecture, and building
            software.
          </p>
        </div>

        {/* Posts */}
        {posts.length === 0 ? (
          <p className="text-gray-500">No posts yet.</p>
        ) : (
          <div className="space-y-12">
            {posts.map((post) => (
              <article key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <h2 className="text-h3 font-display text-white group-hover:text-lime-light transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 mt-2 text-body leading-relaxed">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <span className="text-sm text-gray-500">
                      {post.readingTime}
                    </span>
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
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

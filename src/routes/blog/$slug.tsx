import { createFileRoute, notFound } from "@tanstack/react-router";
import { BlogPostPage } from "@/components/pages/BlogPages";
import { getPost } from "@/data/blog";
import { blogPostHead } from "@/lib/heads";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => (loaderData ? blogPostHead(loaderData.post) : {}),
  component: Page,
});

function Page() {
  const { post } = Route.useLoaderData();
  return <BlogPostPage post={post} />;
}

import { getBlogPosts } from "@/db/post";
import Link from "next/link";

export const metadata = {
  title: "posts",
  description: "posts",
};

const PostsPage = () => {
  let allPosts = getBlogPosts();

  console.log("🚀 ~ file: page.tsx:6 ~ PostsPage ~ allBlogs:", allPosts);

  return (
    <div className="container py-20 flex flex-col">
      <h1 className="text-3xl font-bold mb-8">My POSTS</h1>

      <div className="flex flex-col space-y-4">
        {allPosts
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            } else {
              return 1;
            }
          })
          .map((post) => (
            <Link key={post.slug} href={`/posts/${post.slug}`}>
              <div className="group">
                <p className="text-xl font-medium">{post.metadata.title}</p>
                <p className="text-muted-foreground text-sm group-hover:text-foreground">
                  {post.metadata.publishedAt}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default PostsPage;

import { notFound } from "next/navigation";

import { getBlogPosts } from "@/db/post";
import { Suspense } from "react";
import { CustomMDX } from "@/components/mdx/mdx";

// TODO: add metadata
const PostPage = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  // TODO: implement get post by slug
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container py-10">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-5xl font-extrabold">{post.metadata.title}</h1>

        <Suspense>
          <p className="text-muted-foreground">Date</p>
        </Suspense>
      </div>

      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <CustomMDX source={post.content} />
      </article>
    </div>
  );
};

export default PostPage;

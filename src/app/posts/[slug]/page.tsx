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
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container py-10">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-medium">{post.metadata.title}</h1>

        <Suspense>
          <p className="text-muted-foreground">Date</p>
        </Suspense>
      </div>

      <article>
        <CustomMDX source={post.content} />
      </article>
    </div>
  );
};

export default PostPage;

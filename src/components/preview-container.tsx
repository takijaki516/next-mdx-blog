import { ArrowRightIcon } from "@radix-ui/react-icons";

import { getBlogPosts } from "@/db/post";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";

interface IPreviewContainerProps {
  className?: string;
}

export const PreviewContainer = ({ className }: IPreviewContainerProps) => {
  let allPosts = getBlogPosts();

  return (
    <Card className={cn(className)}>
      <CardHeader>최근 포스트</CardHeader>
      <div className="flex">
        <CardContent>
          <ScrollArea className="max-h-full">
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
                      <p className="text-xl font-medium">
                        {post.metadata.title}
                      </p>
                      <p className="text-muted-foreground text-sm group-hover:text-foreground">
                        {post.metadata.publishedAt}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </ScrollArea>
        </CardContent>

        <CardFooter>
          <div className="flex items-center">
            <p>더보기</p>
            <ArrowRightIcon />
          </div>
        </CardFooter>
      </div>
    </Card>
  );
};

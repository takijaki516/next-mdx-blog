import Link from "next/link";
import { ArrowRightIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";

import { TechBadge } from "@/components/tech-badge";
import { Separator } from "@/components/ui/separator";
import { getBlogPosts } from "@/db/post";

export default function Home() {
  // TODO: maybe implement something like "get recent n-post function"
  let allPosts = getBlogPosts();

  return (
    <main className="h-screen container py-12 flex flex-col space-y-4">
      <div className="pt-4">
        <h1
          className="text-4xl font-bold text-transparent 
      bg-gradient-to-r bg-clip-text from-foreground pb-8"
        >
          성장하고 싶은 개발자입니다!
        </h1>

        <h2 className="pb-4 text-xl font-light">
          안녕하세요! 저는 양택민입니다. <br />
          세상에 긍적적인 영향을 주고 소프트웨어를 만들 것입니다. <br />
          AI를 활용한 서비스를 만들고 싶습니다. <br />
          필요한 기술이라면 무엇이든 배울 것입니다.
        </h2>
      </div>

      <Separator className="my-5" />

      <div className="flex flex-col space-y-3">
        <div className="text-xl font-semibold">tech stack</div>

        <div>
          <div className="pb-2">Language</div>
          <div className="flex items-center space-x-3">
            <TechBadge>Typescript</TechBadge>
            <TechBadge>Javascript</TechBadge>
            <TechBadge>Python</TechBadge>
          </div>
        </div>

        <div>
          <div className="pb-2">Library/Framework</div>
          <div className="flex items-center space-x-3">
            <TechBadge>React</TechBadge>
            <TechBadge>Next.js</TechBadge>
            <TechBadge>Nest.js</TechBadge>
            <TechBadge>Langchain</TechBadge>
          </div>
        </div>
      </div>

      <Separator className="my-5" />

      <div className="flex flex-col space-y-1">
        <div className="text-xl font-semibold pb-3">Recent Post</div>
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
          .slice(0, 4)
          .map((post) => (
            <Link key={post.slug} href={`/posts/${post.slug}`}>
              <div className="group">
                <p>{post.metadata.title}</p>
                <p className="text-muted-foreground text-sm group-hover:text-foreground">
                  {post.metadata.publishedAt}
                </p>
              </div>
            </Link>
          ))}

        <Link
          href={"/posts"}
          className="group hover:cursor-pointer text-muted-foreground hover:text-foreground "
        >
          <div className="pt-2 flex items-center">
            더보기...
            <ArrowRightIcon className="ml-1 group-hover:hidden " />
            <ArrowTopRightIcon className="hidden ml-1 group-hover:block " />
          </div>
        </Link>
      </div>
    </main>
  );
}

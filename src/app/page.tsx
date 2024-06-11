import Link from "next/link";
import { MailIcon } from "lucide-react";
import { ArrowRightIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";

import { TechBadge } from "@/components/tech-badge";
import { Separator } from "@/components/ui/separator";
import { getBlogPosts } from "@/db/post";

export default function Home() {
  // TODO: maybe implement something like "get recent n-post function"
  let allPosts = getBlogPosts();

  return (
    <main className="min-h-screen container py-12 flex flex-col space-y-8">
      <div className="pt-4">
        <h1
          className="text-4xl font-bold text-transparent 
      bg-gradient-to-r bg-clip-text from-foreground pb-8"
        >
          성장하고 싶은 개발자입니다!
        </h1>

        <h2 className="pb-4 text-xl font-light">
          안녕하세요! 저는 양택민입니다. <br />
          세상에 긍적적인 영향을 주는 소프트웨어를 만들고 싶습니다! <br />
        </h2>
        <div className="bg-gradient-to-r from-secondary rounded-md px-2 py-1 ">
          <div className="text-xl font-semibold">Contacts</div>
          <div className="flex items-center text-lg">
            <MailIcon size={16} className="mr-1" />
            takijaki516@gmail.com
          </div>
        </div>
      </div>

      <Separator />

      <div className="flex flex-col space-y-3 pt-4">
        <div className="text-xl font-semibold">tech stack</div>

        {/* TODO: add svg icon to all stack! */}
        <div>
          <div className="pb-2">Language</div>
          <div className="flex items-center space-x-3">
            <TechBadge>
              <img
                alt="typescript logo"
                src="/typescript-logo.svg"
                className="!mr-1"
                width="14"
                height="14"
              />
              Typescript
            </TechBadge>
            <TechBadge>
              <img
                alt="react logo"
                src="/javascript-logo.svg"
                className="!mr-1"
                width="14"
                height="14"
              />
              Javascript
            </TechBadge>
            <TechBadge>
              <img
                alt="python logo"
                src="/python-logo.svg"
                className="!mr-1"
                width="14"
                height="14"
              />
              Python
            </TechBadge>
          </div>
        </div>

        <div>
          <div className="pb-2">Library/Framework</div>

          <div className="flex items-center space-x-3">
            <TechBadge>
              <img
                alt="react logo"
                src="/react-logo.svg"
                className="!mr-1"
                width="14"
                height="14"
              />
              React
            </TechBadge>
            <TechBadge>
              <img
                alt="Next.js logo"
                src="/next-logo.svg"
                className="!mr-1"
                width="14"
                height="14"
              />
              Next.js
            </TechBadge>
            <TechBadge>
              <img
                alt="nest.js logo"
                src="/nestjs-logo.svg"
                className="!mr-1"
                width="14"
                height="14"
              />
              Nest.js
            </TechBadge>
            <TechBadge className="truncate">🦜🔗 Langchain</TechBadge>
          </div>
        </div>
      </div>

      <Separator />

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
              <div className="group ease-linear ">
                <p className="group-hover:font-semibold">
                  {post.metadata.title}
                </p>
                <p className="text-muted-foreground text-sm group-hover:text-foreground group-hover:font-semibold">
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

      <Separator />

      <div className="flex flex-col space-y-1">
        <div className="text-xl font-semibold pb-3">Recent Projects</div>

        <Link
          href={"/projects"}
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

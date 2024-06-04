"use client";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ToggleTheme } from "../theme-toggle";
import { Button } from "../ui/button";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 w-full z-30 font-semibold 
      border-b border-border/40 bg-background/95 backdrop-blur 
      supports-[backdrop-filter]:bg-background/60
      "
    >
      <nav className="container h-16 flex items-center justify-between">
        <div className="flex gap-4 px-2">
          <Link
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/" ? "text-foreground" : "text-foreground/60"
            )}
            href={"/"}
          >
            Home
          </Link>
          <Link
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("/posts")
                ? "text-foreground"
                : "text-foreground/60"
            )}
            href={"/posts"}
          >
            Posts
          </Link>
          <Link
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname?.startsWith("/project")
                ? "text-foreground"
                : "text-foreground/60"
            )}
            href={"/projects"}
          >
            Projects
          </Link>
        </div>

        <div className="flex items-center gap-1 px-2">
          <Button variant={"ghost"} size={"icon"}>
            <Link href={"https://github.com/takijaki516"}>
              <GitHubLogoIcon className="w-6 h-6" />
            </Link>
          </Button>
          <ToggleTheme />
        </div>
      </nav>
    </header>
  );
};

import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function RepoCard({
  name,
  html_url,
  description,
}: {
  name: string;
  html_url: string;
  description: string;
}) {
  return (
    <Card className={cn("w-[380px]")}>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <div>{description}</div>
        <Button variant={"link"}>
          <Link href={html_url} target="_blank">
            <GitHubLogoIcon className="h-8 w-8" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

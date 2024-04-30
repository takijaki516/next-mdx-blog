import { BellRing, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

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

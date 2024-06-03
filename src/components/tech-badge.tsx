import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

interface ITechBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const TechBadge = ({ children, className }: ITechBadgeProps) => {
  return <Badge className={cn(className, "p-1")}>{children}</Badge>;
};

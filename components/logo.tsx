import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Avatar>
        <AvatarImage src="/profile.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <p className="font-semibold text-sm md:text-base">Euger Bonete</p>
    </Link>
  );
}

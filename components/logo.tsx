import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Avatar>
        <AvatarImage src="https://avatars.githubusercontent.com/u/91457358?s=400&u=1bac435d94ac5782fd90fd836eab7e201dbcdd1d&v=4" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <p className="font-semibold text-sm md:text-base">Euger Bonete</p>
    </Link>
  );
}

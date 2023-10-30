import { Loader2 } from "lucide-react";

export default function PageLoading() {
  return (
    <div className="py-36 flex items-center justify-center">
      <Loader2 className="animate-spin h-12 w-12" />
    </div>
  );
}

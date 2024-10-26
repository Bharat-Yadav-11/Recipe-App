import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="w-full min-h-screen items-center justify-items-center mt-10">
        <h1>Loading Please wait...</h1>
      <Skeleton />
    </div>
  );
}

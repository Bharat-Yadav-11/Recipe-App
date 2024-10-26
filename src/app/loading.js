import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {

    return (
        <div className="w-full min-h-screen items-center justify-center">
            <h1 className="text-3xl">Loading Please Wait...</h1>
            <Skeleton />
        </div>
    );
}
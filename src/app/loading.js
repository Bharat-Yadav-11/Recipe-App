import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {

    return (
        <div className="grid m-0 grid-rows-[20px_1fr_20px] items-center h-[100vh] w-[100%] justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1 className="text-3xl">Loading Please Wait...</h1>
            <Skeleton />
        </div>
    );
}
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center mt-10 justify-items-center p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <h1>Oops! The page you are looking for doesn't exist</h1>
          <Link href={"/"}>Go to Home</Link>
        </div>
    );
}
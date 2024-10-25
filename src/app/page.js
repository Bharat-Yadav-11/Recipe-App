import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Welcome to Food Recipe App</h1>
      <Link href={'/recipe-list'}>Go to Recipe List</Link>
    </div>
  );
}

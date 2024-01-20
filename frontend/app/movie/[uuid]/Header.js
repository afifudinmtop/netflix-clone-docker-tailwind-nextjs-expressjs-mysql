import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between fixed w-full top-0 left-0 p-8">
      <Link href="/">
        <img
          className="w-9 h-9 cursor-pointer hover:scale-125"
          src="/movie-back.png"
        />
      </Link>
      <img
        className="w-9 h-9 cursor-pointer hover:scale-125"
        src="/movie-flag.png"
      />
    </div>
  );
}

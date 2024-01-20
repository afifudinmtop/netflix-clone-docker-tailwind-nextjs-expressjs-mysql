import Menu from "./Menu";

export default function Header() {
  return (
    <div className="bg-[#141414] fixed top-0 z-[1000] w-full px-5 pt-5">
      <div className="flex mb-4">
        {/* left */}
        <div className="basis-1/2 flex">
          <img className="w-24 me-10" src="netflix-logo.png" />
          <Menu href="/" menu="Home" xclass="font-bold" />
          <Menu href="/" menu="TV Shows" />
          <Menu href="/" menu="Movies" />
          <Menu href="/" menu="New & Popular" />
          <Menu href="/" menu="My List" />
        </div>

        {/* right */}
        <div className="basis-1/2 flex justify-end">
          <img className="w-6 h-6 my-auto me-5" src="search.png" />

          <img className="w-6 h-6 my-auto me-5" src="notif.png" />

          <img className="rounded w-8 h-8 my-auto" src="avatar.png" />
        </div>
      </div>
    </div>
  );
}

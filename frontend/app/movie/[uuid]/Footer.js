export default function Footer(props) {
  return (
    <div className="flex justify-between fixed w-full bottom-0 left-0 p-8">
      {/* left */}
      <div className="flex basis-1/3">
        <img
          className="w-9 h-9 cursor-pointer hover:scale-125 me-5"
          src="/movie-play.png"
        />
        <img
          className="w-9 h-9 cursor-pointer hover:scale-125 me-5"
          src="/movie-backward.png"
        />
        <img
          className="w-9 h-9 cursor-pointer hover:scale-125 me-5"
          src="/movie-forward.png"
        />
        <img
          className="w-9 h-9 cursor-pointer hover:scale-125"
          src="/movie-volume.png"
        />
      </div>

      {/* middle */}
      <div className="text-slate-50 my-auto text-center text-lg basis-1/3">
        {props.judul}
      </div>

      {/* right */}
      <div className="flex basis-1/3 justify-end">
        <img
          className="w-9 h-9 cursor-pointer hover:scale-125 me-5"
          src="/movie-subtitle.png"
        />
        <img
          className="w-9 h-9 cursor-pointer hover:scale-125 me-5"
          src="/movie-speed.png"
        />
        <img
          className="w-9 h-9 cursor-pointer hover:scale-125"
          src="/movie-fullscreen.png"
        />
      </div>
    </div>
  );
}

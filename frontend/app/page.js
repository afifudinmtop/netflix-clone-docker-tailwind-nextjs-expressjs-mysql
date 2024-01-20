import Header from "./components/Header";
import List from "./components/List";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="px-5 pt-20">
        <List kategori="Anime & Anime-Inspired" />
        <List kategori="Trending Now" />
        <List kategori="Binge-worthy Western Supernatural TV Shows" />

        <List kategori="Anime & Anime-Inspired" />
        <List kategori="Trending Now" />
        <List kategori="Binge-worthy Western Supernatural TV Shows" />

        <List kategori="Anime & Anime-Inspired" />
        <List kategori="Trending Now" />
        <List kategori="Binge-worthy Western Supernatural TV Shows" />
      </div>
    </div>
  );
}

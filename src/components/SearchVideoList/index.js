import { useEffect, useState } from "react";
import VideoList from "../../components/VideoList";
import styles from "./SearchVideoList.module.css";
import Loader from "../../components/Loader"

//Filtra por categoria/titulo, implementar meio de converter as palvras recebidas no input tudo para minusculas

function filterVideo(videos, searchText) {
  return videos.filter(
    (video) =>
      video.category.includes(searchText) || video.title.includes(searchText)
  );
}

function SearchVideoList({ videos }) {
  const [searchText, setSearchText] = useState("");
  const foundVideos = filterVideo(videos, searchText);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  return (
    <section className={styles.container}>
      <input
        type="search"
        placeholder="Pesquisar..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      {loading ? (
        <Loader />
      ) : (
        <VideoList
          videos={foundVideos}
          emptyHeading={`Sem vídeos sobre "${searchText}"`}
        />
      )}
    </section>
  );
}

export default SearchVideoList;

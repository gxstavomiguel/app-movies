import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Watch.module.css";
import videos from "../../json/videos.json"
import PageNotFound from "../PageNotFound"

function Watch() {
  const params = useParams()
  const video = videos.find((video) => {return video.id === params.id });
  
  if(!video) {
    {return <PageNotFound />}
  };

  return (
    <>
      <Header />
      <Container>
        <section className={styles.watch}>
          <iframe 
            width="854" height="480" 
            src={`https://www.youtube.com/embed/${video.id}`}
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen></iframe>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Watch;

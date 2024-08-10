import styles from "./Favorites.module.css";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import VideoList from "../../components/VideoList";
import { useFavoritesContext } from "../../contexts/Favorites";

function Favorites() {
  const { favorite } = useFavoritesContext()
  return (
    <>
      <Header />
      <Container>
        <section className={styles.favorites}>
          <h2>Meus Favoritos</h2>
          { <VideoList videos={favorite} emptyHeading="Ainda não há favoritos"/>}
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Favorites;

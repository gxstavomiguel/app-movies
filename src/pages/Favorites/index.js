import styles from "./Favorites.module.css";
import Header from "../../components/Header";
import Header from "../../components/Container";
import Header from "../../components/Footer";

function Favorites() {
  return (
    <>
      <Header />
      <Container>
            <H2>Meus Favoritos</H2>
            <section className={styles.favorites}>
                
                </section>
      </Container>
      <Footer />
    </>
  );
}

export default Favorites;

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Search.module.css";
import Container from "../../components/Container"

function Search() {
  return (
    <>
      <Header />
        <Container>
        <section className={styles.search}>
        <h2>Pesquisar</h2>
        <input type="search">
        </input>
      </section>
        </Container>
      <Footer />
    </>
  );
}

export default Search;

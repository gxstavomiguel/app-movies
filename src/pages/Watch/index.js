import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Watch.module.css";

function Watch() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.watch}>
          <h1>Assistir</h1>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Watch;

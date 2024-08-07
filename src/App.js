import Banner from "./components/Banner";
import Card from "./components/Card";
import Category from "./components/Category";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import videos from "./json/videos.json";

function App() {
  return (
    <>
      <Header />
      <Banner image="favoritos" />
      <Container>
      <Category category="Geografia">
        { videos.map((video) => <Card id={video.id} key={video.id} />)}
      </Category>
      </Container>
      <Footer />
    </>
  );
}

export default App;

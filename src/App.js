import Banner from "./components/Banner";
import Card from "./components/Card";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import videos from "./json/db.json"


function App() {
  return (
    <>
      <Header />
      <Banner image="favoritos"/>
      <Container>


       <section className="cards">

        {
          videos.map(video => {
            return <Card id={video.id} key={video.id}/>
          })
        }

       </section>



      </Container>
      <Footer />
    </>
  );
}

export default App;

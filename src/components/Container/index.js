import styles from "./Container.module.css"
import React from 'react';


const Container = ({children}) => {
    return (
        <section className={styles.container}>
            <h1>Hello World</h1>
            {children}
        </section>
    )
}

export default Container;

/** Modelo original do video, mesmo com a prop de children
 function App() {
  return (
    <>
      <Header />
      <Banner image="favoritos"/>
      <Container>
        <Card />
      </Container>
      <Footer />
    </>
  );
}
export default App;

import styles from "./Container.module.css"

function Container({children}){
    return (
        <section className={styles.container}>
            <h1>Hello World</h1>
        </section>
    )


}

export default Container;

*/
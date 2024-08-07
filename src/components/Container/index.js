import styles from "./Container.module.css"

function Container({ children }){
    return (
        <section className={styles.container}>
            <h1>Hello World</h1>
            <p>Estou aprendendo React JS!</p>
        </section>
    )


}

export default Container;

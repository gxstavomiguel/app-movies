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

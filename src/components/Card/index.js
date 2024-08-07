import styles from "./Card.module.css"

function Card({ id }){
    return (
        <section className={ styles.card }>
            <a  
            href={`https://www.youtube.com/watch?v=${id}`}
            // B_nq7VTJZds
            rel="noreferrer noopener"
            target="_blank">
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} 
                // B_nq7VTJZds   
                alt="Capa"/>
            </a>


        </section>
    );
}

export default Card;
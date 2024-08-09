import VideoList from "../../components/VideoList"
import styles from "./SearchVideoList.module.css"

function SearchVideoList( {videos }){
    return(
        <section className={styles.container}>
            <input
                type="search"
                placeholder="Pesquisar..." 
            />
                <VideoList videos={videos}/>
        </section>
    );
}

export default SearchVideoList;
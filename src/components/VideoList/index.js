import styles from "./VideoList.module.css"
import videos from "../../json/videos.json"

function VideoList({ videos, emptyHeading}){
    return(
        <>
            <h2>{emptyHeading}</h2>
            <section className={styles.videos}>
            {videos.map((video) => <Card id={video.id} key={video.id} />)}
            </section>
        </>
    );
}

export default VideoList;
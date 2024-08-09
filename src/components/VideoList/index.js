import styles from "./VideoList.module.css"
import videos from "../../json/videos.json"

function VideoList({ videos, emptyHeading}){

    const count = videos.length
    let heading = emptyHeading

    if(count > 0){
        const noun = count > ? 'vídeos' : 'vídeo';
        heading = `${count} ${noun}`
    }

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
import {useRef} from "react";
function VideoPlayerExample() {
    const videoRef = useRef(null);
    return (
        <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px" }}>
        <h2>4. useRef</h2>

        <video
            ref={videoRef}
            width="300"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            style={{ borderRadius: "8px", display: "block" }}
        />

        <div style={{ marginTop: "10px" }}>
            <button onClick={()=> videoRef.current.play()}>▶️ Play</button>
            <button onClick={()=> videoRef.current.pause()}>⏸️ Pause</button>
            <button onClick={()=> videoRef.current.currentTime = 0}>⏮️ Restart</button>
        </div>
        </div>
    );
}

export default VideoPlayerExample;
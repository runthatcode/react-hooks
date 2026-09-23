import { useState, useMemo } from "react";

function WordCounterExample() {
    const [text, setText] = useState("");
    const [likes, setLikes] = useState(0);

    const stats = useMemo(()=>{
        console.log("======== Counting Words ========");
        const words = text.trim() ? text.trim().split(/\s+/).length : 0;
        const minutes = Math.ceil(words / 200);
        return {words, minutes}
    }, [text])

    return (
        <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px" }}>
        <h2>5. useMemo</h2>
        <textarea
            value={text}
            onChange={(e)=> setText(e.target.value)}
            placeholder="Start typing or paste an article..."
            rows={4}
            style={{ width: "100%" }}
        />
        <p>📝 {stats.words} words · ⏱️ {stats.minutes} min read</p>

        <hr />
        <p>Unrelated likes: {likes}</p>
        <button onClick={()=> setLikes(likes+1)}>Like</button>
        </div>
    );
}

export default WordCounterExample;
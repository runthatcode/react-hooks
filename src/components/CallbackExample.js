import { useCallback, useState, memo } from "react";

const SubscribeButton = memo(function SubscribeButton({ onSubscribe }) {
    console.log("SubscribeButton Updated!")
    return <button onClick={onSubscribe}>🔔 Subscribe</button>
    
})

function CallbackExample() {

    const [likes, setLikes] = useState(0);
    const handleSubscribe = useCallback(()=>{
        console.log("Susbscribed! Thank You!")
    },[])

    return (
        <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px" }}>
        <h2>6. useCallback</h2>
        <SubscribeButton onSubscribe={handleSubscribe} />
        <p>Unrelated likes: {likes}</p>
        <button onClick={()=> setLikes(likes+1)}>Like</button>
        </div>
    );
}

export default CallbackExample;
const { useState, useEffect } = require("react");

function DogFetchExample(){
    const [dogUrl, setDogUrl] = useState("");
    const [loading, setLoading] = useState(true)
    const [fetchId, setFetchId] = useState(0);

    useEffect(()=>{
        setLoading(true);
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res)=> res.json())
            .then((data)=>{
                setDogUrl(data.message);
                setLoading(false)
            })
    }, [fetchId])

    return(
        <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px" }}>
            <h2>2. useEffect</h2>
            {
                loading ? (
                    <p>Fetching a good puppy ... 🐕</p>
                ) : (
                    <img src={dogUrl} alt="random dog" style={{maxWidth: "200px"}} />
                )
            }
            <br/>
            <button onClick={()=>{setFetchId(fetchId + 1)}}>Show me a random dog</button>
        </div>
    )
}

export default DogFetchExample;
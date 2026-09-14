import { useState } from "react";

function LikeButtonExample() {
  // "liked" remembers if it's liked. "setLiked" is the only way to change it.
  const [liked, setLiked] = useState(false);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px" }}>
      <h2>1. useState</h2>
      <p>Do you like this video?</p>

      {/* Clicking flips "liked" to the opposite */}
      <button onClick={() => setLiked(!liked)}>
        {liked ? "❤️ Liked" : "🤍 Like"}
      </button>

      <p>{liked ? "Thanks for the like!" : "Tap the heart above 👆"}</p>
    </div>
  );
}

export default LikeButtonExample;
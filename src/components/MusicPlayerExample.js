import { createContext, useContext, useState } from "react";

const PlayerContext = createContext(null);

function SongList() {
    const songs = ["🎸 Bohemian Rhapsody", "🎹 Clair de Lune", "🎺 So What"];
    const { playSong } = useContext(PlayerContext);
    return (
        <ul style={{ listStyle: "none", padding: 0 }}>
        {songs.map((song) => (
          <li key={song} style={{ padding: "4px 0" }}>
            {song} <button onClick={()=> playSong(song)}>▶️ Play</button>
          </li>
        ))}
      </ul>
    )
}

function NowPlayingBar() {
    const {currentSong} = useContext(PlayerContext);
    return (
        <div style={{ background: "#222", color: "#fff", padding: "10px", borderRadius: "6px" }}>
            {currentSong ? `Now Playing : ${currentSong}` : "Nothing playing yet"}
        </div>
    )
}

function MusicPlayerExample() {
  const [currentSong, setCurrentSong] = useState(null);
  const playSong = (song) => setCurrentSong(song);

  return (
    <PlayerContext.Provider value={{currentSong, playSong}}>
        <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px" }}>
            <h2>3. useContext</h2>
            <NowPlayingBar/>
            <SongList/>
        </div>
    </PlayerContext.Provider>
  );
}

export default MusicPlayerExample;
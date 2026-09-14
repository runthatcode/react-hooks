// import LikeButtonExample from '../components/LikeButtonExample'
// import DogFetchExample from '../components/DogFetchExample'
// import MusicPlayerExample from '../components/MusicPlayerExample'
import VideoPlayerExample from '../components/VideoPlayerExample'
function Welcome() {
  return (
        <>
            <h1>Welcome to <span className='blink-fade'>Runthatcode🚀</span> Channel</h1>
            <h1>React Hooks</h1>
            <div className='hook-blocks'>
              {/* <LikeButtonExample/> */}
              {/* <DogFetchExample/> */}
              {/* <MusicPlayerExample/> */}
              <VideoPlayerExample/>
            </div>
        </>
  );
}

export default Welcome;
import React from "react";
import Header from "./Header";
// import Details from ".Details";
// import Comments from ".Comments";
import video from "../data/video.js";


function App() {
  // console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Header videoTitle={video.title}/>
      {/* <Details />
      <Comments /> */}
    </div>
  );
}

export default App;

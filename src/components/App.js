import React from "react";
import Header from "./Header";
import Details from "./Details";
import video from "../data/video.js";


function App() {
  // console.log("Here's your data:", video);
  // const [views, setView] = useState(video.views)
  console.log(video.views)

  // function showViews(){
  //   setView(views)
  // }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Header videoTitle={video.title}/>
      <Details showViews={video.views} createdAt={video.createdAt} upVotes={video.upvotes} downVotes={video.downvotes} comments={video.comments}/>
    </div>
  );
}

export default App;

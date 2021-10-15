import React, { useState} from "react";
import Comments from "./Comments";

function Details( { showViews, createdAt, upVotes, downVotes, comments }){
    let [liked, setLiked] = useState(upVotes)
    let [disliked, setDisliked] = useState(downVotes)
    const [showComments, setShowComments] = useState(true)

function handleLikeButton(){
    let likes = liked + 1
    console.log(likes)
    setLiked(likes)
}

function handleDislikeButton(){
    let dislikes = disliked + 1
    setDisliked(dislikes)
}

// const commentsToDisplay = comments.filter((comment) => (
//     <li key={comment.id}> {comment.user} {comment.comment}
//     </li>
// ))

function handleCommentClick(){
    setShowComments(!showComments)
}

    return(
        <div className="details">
            <h2>{showViews} Views | {createdAt} </h2>
            <button onClick={handleLikeButton}>{liked}👍</button> <button onClick={handleDislikeButton}>{disliked}👎</button>
            <br></br>
            <br></br>
            <button onClick={handleCommentClick}>{showComments ? "Hide Comments" : "Show Comments"}</button>
            {showComments ? <Comments comments={comments} /> : null}
        </div>
    )
}

export default Details;
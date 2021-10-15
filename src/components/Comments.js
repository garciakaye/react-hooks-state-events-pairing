import React, {useState} from "react";


function Comments({comments}){
    const [deleteComment, showDeleteComment] = useState(true)

    function handleDeleteCommentClick(){
        showDeleteComment(!deleteComment)
    }

    return (
       <div>
           <h1>2 Comments</h1>
        <div className="comments">  
           {comments.map((comment) => {
               return (
                <div key={comment.id}> 
               <h2>{comment.user}</h2>
               <p>{comment.comment}</p>
               <button onClick={handleDeleteCommentClick}>{deleteComment ? "Delete Comment" : null}</button>
               </div>
               )})}
        </div>
        </div> 
    )

}


export default Comments;
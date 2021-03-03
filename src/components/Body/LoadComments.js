import React from 'react';
import dateFormat from "dateformat";
const LoadComments = (props) => {
    return (

        props.comments.map(comment => {
            return (
                <div>
                    <h5 className="commonStyle">Author:{comment.author}</h5>
                    <p>Rating:{comment.rating}</p>
                    <h6>Comment:{comment.comment}</h6>
                    <p>Date:{dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
                </div>
            )
        })
    )
};

export default LoadComments;
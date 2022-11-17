import React from 'react';

import './Comment.css'

const Comment = React.memo((props) => {
    console.log("RENDER FROM REVIEW");
    return (

        <div className='Comment'>
            {props.comment}
        </div>

    );

})

export default Comment;
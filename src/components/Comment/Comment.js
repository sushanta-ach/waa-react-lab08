import React from 'react';

import './Comment.css'

const Comment = React.memo((props) => {
    console.log("RENDER FROM REVIEW");
    return (

        <div className='Commment'>
            {props.comment}
            <button onClick={props.buttonClicked} > Review Button</button>
        </div>

    );

})

export default Comment;
import React from 'react';

const PostDetails = (props) => {
    console.log();
    const detail = props.location.state
    return (
        <div className="container section post-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{detail.title}</span>
                    <p>{detail.content}</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by ....</div>
                    <div>Jan 01 1900</div>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;
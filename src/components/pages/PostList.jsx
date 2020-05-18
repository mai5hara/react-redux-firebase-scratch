import React from 'react';
import PostSummary from './PostSummary';

const PostList = ({postList}) => {
    return (
        <div className="post-list section">
            {postList.map((post, index) => (
                <PostSummary key={index} {...post} />
            ))}
        </div>
    );
};

export default PostList;
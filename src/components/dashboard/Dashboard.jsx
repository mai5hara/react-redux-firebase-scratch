import React from 'react';
import Notification from "./Notifications";
import PostList from "../pages/PostList";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const Dashboard = ({posts}) => {

    console.log(posts);

    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <PostList postList={posts} />
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notification />

                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        posts: state.firestore.ordered.posts
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'posts'
    }])
)(Dashboard);
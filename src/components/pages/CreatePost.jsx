import React,{useState} from 'react';
import { createPost } from '../../store/actions/postActions';
import { connect } from 'react-redux';

const CreatePost = ({createPost}) => {
    const [state, setState] = useState({
        title: '',
        content: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
        createPost(state)
    }

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.id] : e.target.value
        });
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Create a Post</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="content">Post Content</label>
                    <textarea className="materialize-textarea" id="content" onChange={handleChange}>
                    </textarea>
                </div>
                <div className="input-field">

                    <button className="btn deep-orange darken-4 z-depth-0">Create</button>
                </div>
            </form>
            
        </div>
    );
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         createPost: dispatch({type: 'ADD_POST', })
//     }
// }

//Thunk
const mapDispatchToProps = (dispatch) => {
    return {
        createPost: post => {
            dispatch(createPost(post));
        }
    }
}


export default connect(null, mapDispatchToProps)(CreatePost);
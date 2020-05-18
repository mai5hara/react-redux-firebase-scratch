const initState = {
    posts:[
        // {id:1, title: "How To Build A Vue Survey...."},
        // {id:2, title: "An Introduction To React...."},
        // {id:3, title: "Readability Algorithms...."},
    ]
}

const postReducer = (state=initState, action) => {
    switch(action.type) {
        case 'ADD_POST':
            return state;
        case 'ADD_POST_ERROR':
            return console.log('Add post error: ', action.err);
        default:
            return state;
    }
}

export default postReducer;
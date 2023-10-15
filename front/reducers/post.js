export const initialState = {
    mainPosts: [{
        mainPosts: [{
            id: 1,
            User: {
                id: 1,
                nickname: 'minjae',
            },
            content: '첫 게시글!',
            Images: [{
                src: ''
            }, {
                src: ''
            }, {
                src: ''
            }],
            Comments: [{
                User: {
                    nickname: 'hero',
                },
                content: '반갑습니다~',
            }, {
                User: {
                    nickname: 'agu',
                },
                content: 'hello~',
            }]
        }],
        imagePaths: [],
        postAdded: false,
    }]
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
}

const dummyPost = {
    id: 2,
    content: 'dummy data',
    User: {
        id: 1,
        nickname: 'onepunchman'
    },
    Images: [],
    Comments: [],
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            }
        default:
            return state;
    }
}

export default reducer;
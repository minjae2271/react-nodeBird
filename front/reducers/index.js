const initialState = {
    name: 'mj',
    age: 27,
    password: 'babo'
}

const changeNickname = {
    type: 'CHANGE_NICKNAME',
    data: 'boogiecho'
}

const rootReducer = ((state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_NICKNAME':
            return {
                ...state,
                name: action.data
            }
    }
});

export default rootReducer;
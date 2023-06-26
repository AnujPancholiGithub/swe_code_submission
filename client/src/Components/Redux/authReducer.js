const { default: SignUp } = require("../Auth/SignUp");
const { LOG_IN } = require("./actionTypes")

const initalState = {
    user: {},
}

 const reducer = (state = initalState, action){
    switch (action.type) {
        case LOG_IN:

            return { ...state, user : action.payload }
            break;
        case SignUp:
            return {...state, user: action.payload}
default: return state;
    }
    
}
export default reducer;
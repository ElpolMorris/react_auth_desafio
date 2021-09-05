import {
	GET_USERS_INIT,
	GET_USERS_SUCCCESS,
	GET_USERS_FAILURE,
    USER_UPDATE_FAILURE,
    USER_UPDATE_INIT,
    USER_UPDATE_SUCCESS,
    USER_CREATE_INIT,
    USER_CREATE_SUCCESS,
    USER_CREATE_FAILURE,
    USER_DELETE_INIT,
    USER_DELETE_SUCCESS,
    USER_DELETE_FAILURE
} from "./constants";

const initialState = {
    isLogin: false,
    data: [],
    errorMessagge: ""
}

const userReducers = (state = initialState, actions) => {
    switch (actions.type) {
        case GET_USERS_INIT:            
            return {
                ...state,
            }
        case GET_USERS_SUCCCESS:
            const filterData = actions.payload.filter((user)=> user.id > 6)         
            return {
                ...state,
                isLogin: true,
                data: [...filterData]
            }
        case GET_USERS_FAILURE:            
            return {
                ...state,
                errorMessagge: actions.payload,
                data: [],
                isLogin: false
            }
        case USER_DELETE_INIT:
            return {
                ...state,
            }
        case USER_DELETE_SUCCESS:
            return {
                ...state,
                data: actions.payload
            }
        case USER_DELETE_FAILURE:
            return {
                ...state,
                errorMessagge: actions.payload,
            }
        case USER_CREATE_INIT:
            return {
                ...state
            }
        case USER_CREATE_SUCCESS:
            return {
                ...state,
                data: [...state.data, actions.payload]
            }
        case USER_CREATE_FAILURE:
            return {
                ...state,
                errorMessagge: actions.payload
            }
        case USER_UPDATE_INIT:
            return {
                ...state
            }
        case USER_UPDATE_SUCCESS:
            return {
                ...state,
                data: actions.payload
            }    
        default:
            return state;
    }
}

export default userReducers
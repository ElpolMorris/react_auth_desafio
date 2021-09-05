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
import store from "../store"

export const getUsersInit = () => ({
    type: GET_USERS_INIT
})

export const getUsersSuccess = (data) => ({
    type: GET_USERS_SUCCCESS,
    payload: data
})

export const getUsersFailure = (err) => ({
    type: GET_USERS_FAILURE,
    payload: err
})

export const userDeleteInit = () => ({
    type: USER_DELETE_INIT
})
export const userDeleteSuccess = (id) => {
    const { users: usuarios } = store.getState();
	const users = usuarios.data;
    return {
        type: USER_DELETE_SUCCESS,
        payload: users.filter((user) =>  user.id !== +id)
    }
}
export const userDeleteFailure = (err) => ({
    type: USER_DELETE_FAILURE,
    payload: err
})

export const userCreateInit = ()=>({
    type: USER_CREATE_INIT
})

export const userCreateSuccces = (user) => ({
    type: USER_CREATE_SUCCESS,
    payload: user
})

export const userCreateFailure = (err) => ({
    type: USER_CREATE_FAILURE,
    payload: err
}) 

export const userUpdateInit = () => ({
    type: USER_UPDATE_INIT
})
export const userUpdateSuccess = (userNewData) => {
    const { users: usuarios } = store.getState();
	const users = usuarios.data;
    const usersToUpdate = users.findIndex(user => user.id === +userNewData.id)
	users[usersToUpdate] = userNewData
    debugger
    return {
        type: USER_UPDATE_SUCCESS,
        payload: users
    }
}
export const userUpdateFailure = (err) => ({
    type: USER_UPDATE_FAILURE,
    payload: err
})
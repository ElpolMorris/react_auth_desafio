import axios from "axios";

import {
	getUsersInit,
	getUsersSuccess,
	getUsersFailure,
	userDeleteInit,
	userDeleteSuccess,
	userDeleteFailure,
	userCreateInit,
	userCreateSuccces,
	userCreateFailure,
	userUpdateInit,
	userUpdateSuccess,
	userUpdateFailure
} from "./actions";

export const getUsersFetch = (tokenLogin) => {
	return async (dispatch) => {
		dispatch(getUsersInit());
		try {
			const { data } = await axios.get("http://localhost:4000/products", {
				headers: {
					authorization: `Bearer ${tokenLogin}`,
				},
			});
			dispatch(getUsersSuccess(data));
		} catch (error) {
			console.log(error.message);
			dispatch(getUsersFailure(error.message));
		}
	};
};

export const removeUser = (id,token) => {
	return async (dispatch) => {
		dispatch(userDeleteInit());
		try {
			const { data } = await axios.delete(
				`http://localhost:4000/products/${id}`,
				{
					headers: {
						authorization: `Bearer ${token}`,
					},
				}
			);
			dispatch(userDeleteSuccess(id));
		} catch (error) {
			dispatch(userDeleteFailure(error.message));
		}
	};
};

export const addUser = (user,token)=>{
	return async(dispatch) => {
		dispatch(userCreateInit())
		try {
			const {data} = await axios.post("http://localhost:4000/products",user,{
				headers: {
					authorization: `Bearer ${token}`,
				}
			})
			dispatch(userCreateSuccces(user))
		} catch (error) {
			console.log(error)
			dispatch(userCreateFailure(error.message))
		}
	}
}

export const updateUser = (user,token)=>{
	return async(dispatch) => {
		dispatch(userUpdateInit())
		try {
			const {data} = await axios.put(`http://localhost:4000/products/${user.id}`,{username: user.username,password: user.password},{
				headers: {
					authorization: `Bearer ${token}`,
				}
			})
			debugger
			dispatch(userUpdateSuccess(user))
		} catch (error) {
			console.log(error)
			dispatch(userUpdateFailure(error.message))
		}
	}
}
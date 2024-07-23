import { apiUrl } from "../../common/api/config";

const getUsers = async () => {

    try {

        const token = localStorage.getItem('token');

        const response = await fetch(apiUrl + '/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        });

        const responseData = await response.json();

        if (response.ok) {
            return responseData;
        } else {
            throw new Error(responseData.errors);
        }
    } catch (error) {
        throw new Error(error);
    }

}


const deleteUser = async (user_id) => {

    try {

        const token = localStorage.getItem('token'); 

        const response = await fetch(apiUrl + '/users/' + user_id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        });

        const responseData = await response.json();

        return responseData;

    } catch (error) {
        return error;
    }

}


export { getUsers, deleteUser }
import { apiUrl } from "../../common/api/config";

export const getDashboardStats = async () => {

    try {

        const token = localStorage.getItem('accessToken');

        const response = await fetch(apiUrl + '/admin_panel/dashboard-stats/', {
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

export const getMonthlyEarnings = async () => {

    try {

        const token = localStorage.getItem('accessToken');

        const response = await fetch(apiUrl + '/admin_panel/earnings/', {
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
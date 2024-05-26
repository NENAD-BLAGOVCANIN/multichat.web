import { apiUrl } from './config';

const login = async (email, password) => {
    
    const variables = {
        email: email,
        password: password
    };

    try {
        const response = await fetch(apiUrl+'/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(variables)
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
};

export { login };

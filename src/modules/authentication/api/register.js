import { apiUrl } from '../../common/api/config';

const register = async (name, email, password) => {
    
    const variables = {
        name: name,
        email: email,
        password: password
    };

    try {
        const response = await fetch(apiUrl+'/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(variables)
        });

        const responseData = await response.json();

        if (response.ok) {
            return { success: true, message: "Login successful" };
        } else {
            throw new Error(responseData.errors);
        }
    } catch (error) {
        throw new Error(error);
    }
};

export { register };


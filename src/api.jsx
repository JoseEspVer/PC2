import axios from 'axios';

const API_URL = 'HTTP://52.3.234.203.8080';

export const login = async (email, password) => {
    const response = await axios.post(`${API_URL}/auth/login`, {email, password});
    return response.data;
};

export const register = async (name, email, password, username) => {
    const response = await axios.post(`${API_URL}/auth/register`, {name, email, password, username});
    return response.data;
};

export const listProductos = async (token) => {
    const response = await axios.get(`${API_URL}/producto`,{
        headers:{
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data
};
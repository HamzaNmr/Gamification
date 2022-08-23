import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = JSON.parse(localStorage.getItem('profile')).token;
    }

    return req;
});

export const getUsers = () => API.get('/home');
export const updateProfile = (id, updatedProfile) => API.patch(`/home/${id}`, updatedProfile);


export const getTasks = () => API.get('/tasks');
export const getTask = (id) => API.get(`/tasks/${id}`);
export const completeTask = (id) => API.patch(`/tasks/${id}/completeTask`);

export const getGroups = () => API.get('/community');
export const getGroup = (id) => API.get(`/community/${id}`);
export const comment = (value, id) => API.post(`/community/${id}/commentGroup`, { value });


export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
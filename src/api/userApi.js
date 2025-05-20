import axiosInstance from './axiosInstance';

export const fetchUsers = () => axiosInstance.get('/users');

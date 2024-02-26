import axios from 'axios';

const url = 'http://localhost:5000/api/users';

export const fetchUsers = () => axios.get(url) ;
export const updateUser =(id, updatedUser) => axios.patch(`${url}/${id}`, updatedUser);
export const deleteUser =(id) => axios.delete(`${url}/${id}`);

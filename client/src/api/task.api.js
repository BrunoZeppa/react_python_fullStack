import axios from 'axios'

const taskApi = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/tasks/'
})

export const getAllTask = () => taskApi.get("/");
export const getOneTask = (id) => taskApi.get(`/${id}/`);
export const creatNewTask  = (task) => taskApi.post("/", task);
export const deleteTask = (id) => taskApi.delete(`/${id}/`);
export const updateTask = (id, update) => taskApi.patch(`/${id}/`, update);
import axios from 'axios';

const apiUrl = 'https://todo-app-mern-api.vercel.app/api/tasks';

// Get All Task
export function getTasks() {
    return axios.get(apiUrl);
}

// Add Tasks
export function addTasks(task) {
    return axios.post(apiUrl, task);
}

// Update Task
export function updateTask(id, task) {
    return axios.put(apiUrl + '/' + id, task);
}

// Delete Task
export function deleteTask(id) {
    return axios.delete(apiUrl + '/' + id);
}
import axios from 'axios';

const apiUrl = 'http://localhost:8080/api/tasks';

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
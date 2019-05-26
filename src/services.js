const getTasksList = (page, sortFieldName, sortOrder) => 
fetch(`https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=test&sort_field=${sortFieldName}&sort_direction=${sortOrder}&page=${page}`)
.then(response => response.json());

const createTask = (username, email, text) => {
    var formData  = new FormData();
    
    formData.append('username', username);
    formData.append('email', email);
    formData.append('text', text);
    return fetch('https://uxcandy.com/~shapoval/test-task-backend/v2/create?developer=test', {
        method: 'POST',
        body: formData
    }).then(response => response.json());
}

const editTask = (token, id, username, email, text, status) => {
    var formData  = new FormData();
    
    formData.append('token', token);
    formData.append('username', username);
    formData.append('email', email);
    formData.append('text', text);
    formData.append('status', status);
    return fetch(`https://uxcandy.com/~shapoval/test-task-backend/v2/edit/${id}?developer=test`, {
        method: 'POST',
        body: formData
    }).then(response => response.json());
}

const login = (username, password) => {
    var formData  = new FormData();
    
    formData.append('username', username);
    formData.append('password', password);
    return fetch('https://uxcandy.com/~shapoval/test-task-backend/v2/login?developer=test', {
        method: 'POST',
        body: formData
    }).then(response => response.json());
}


export default {
    getTasksList,
    createTask,
    editTask,
    login
};
import servises from '../../services';
import * as actionTypes  from './actionTypes';

const login = (username, password) => dispatch => 
servises.login(username, password).then(result => {
    if(result.status === 'error'){
        return Promise.reject(result.message);
    } else {
        sessionStorage.setItem('token', result.message.token);
        dispatch({
            type: actionTypes.AUTH_SET_USER,
            payload: {user: username}
        });
    }
}, responce => {
    return Promise.reject({unknown: 'Unknown error. Try again later'});
});


export default {
    login
}
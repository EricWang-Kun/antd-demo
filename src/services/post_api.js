import axios from 'axios';

export function postRequest() {
    return axios.get('http://jsonplaceholder.typicode.com/posts')
}
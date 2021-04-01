import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
    baseURL: 'https://my-json-server.typicode.com/kaliayev-proton/mockend-streamloots/'
});

export default instance;
import axios from './axios-instance';
import { AxiosResponse } from 'axios';

export const fetchCards = (): Promise<AxiosResponse<any>> => {
    return axios.get<any>('/cards');
};
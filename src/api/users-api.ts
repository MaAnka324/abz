import axios, {AxiosResponse} from 'axios'
import {InitialStateType, UserType} from "../../src/reducers/users-reducer";
import {FormType} from "../../src/components/Form";


const baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1/';

const instance = axios.create({
    baseURL,
});

export type ResponseType<D = {}> = {
    resultCode: number;
    messages: Array<string>;
    fieldsErrors: Array<string>;
    data: D;
};

const getNewToken = async () => {
    try {
        const response = await axios.get<{ token: string }>('https://frontend-test-assignment-api.abz.agency/api/v1/token');

        const newToken = response.data.token;
        console.log('New Token:', newToken);

        return newToken;
    } catch (error) {
        console.error('Error fetching a new token:', error);
        throw error;
    }
};

export const usersAPI = {
    async getUsers() {
        return instance.get<InitialStateType>('users');
    },
    async addUser(data: FormType) {
        try {
            const token = await getNewToken();

            const instanceWithToken = axios.create({
                baseURL,
                headers: {
                    'Token': token,
                    'Content-Type': 'multipart/form-data',
                }
            });

            const response = await instanceWithToken.post<ResponseType<FormType >>('users', data);

            return response.data;
        } catch (error) {
            console.error('Error adding user:', error);
            throw error;
        }
    },
};

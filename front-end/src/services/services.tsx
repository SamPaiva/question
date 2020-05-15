import axios from 'axios';
import { LoginViewModel } from '../types/user';

const URL_BASE = process.env.REACT_APP_URL_API;
const URL_HOMO = 'http://localhost:3333'

export async function getAllQuestions() {
    return await axios.get(URL_BASE + '/questions' || URL_HOMO + '/questions');
}

export async function getAnswersByQuestionId(id: number) {
    return await axios.get(URL_BASE + '/answers' || URL_HOMO + '/answers', {
        params: {
            id: id
        }
    })
}


export async function login(login: LoginViewModel) {
    return await axios.post(URL_BASE + '/sessions' || URL_HOMO + '/sessions', login)
}
import axios from 'axios'

export const requestAPI = {
    createRequest(success: boolean) {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {body: {success: success}})
    }
}
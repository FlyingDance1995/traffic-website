import axios from 'axios';

export default {
    async getCaptcha() {
        console.log('process.env.VITE_API_BASE_URL', process.env.VITE_API_BASE_URL)
        axios.get(`${process.env.VITE_API_BASE_URL}`)
            .then(function (response) {
                console.log('response', response);
            }).catch(function (error) {
                console.log('error', error);
            })
    }
};
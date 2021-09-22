import axios from 'axios'

const apiNode = axios.create({
    baseURL: 'http://localhost:3003'
})

export default apiNode;
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 75aa4d5ff13fac4d3d6e1a88f7fb8b63b4719bb13da311e1871846c15a23a359'
    }
})
// 8796bcee4411715c15ec97167f1a7788

import axios from 'axios'

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
});

export default instance
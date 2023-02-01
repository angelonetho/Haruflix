//Base da URL: https://api.themoviedb.org/3/
//URL DA API: movie/now_playing?api_key=a5cf1617e15e3c72bd4a23f2116971a6&language=pt-BR

import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api
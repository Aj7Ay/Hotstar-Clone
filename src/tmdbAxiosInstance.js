import axios from "axios";

const tmdbAxiosInstance=axios.create({
    baseURL:"https://api.themoviedb.org/3"
})
export default tmdbAxiosInstance;
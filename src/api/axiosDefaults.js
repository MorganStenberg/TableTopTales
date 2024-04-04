import axios from "axios";

axios.defaults.baseURL = "https://ttt-api-0a140d9077e3.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;
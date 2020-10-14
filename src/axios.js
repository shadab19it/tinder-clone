import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://tinder121.herokuapp.com/",
});

export default instance;

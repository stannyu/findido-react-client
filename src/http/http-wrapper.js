import axios from "axios";

const baseUrl = "http://localhost:3030/";

const api = axios.create({
  baseURL: baseUrl
});

export function getEntityByUrl(url, cb) {
  api
    .get(baseUrl + url)
    .then(res => {
      cb(res.data);
    })
    .catch(err => console.log(err));
}

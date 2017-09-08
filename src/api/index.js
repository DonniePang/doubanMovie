import axios from 'axios'

const HOST = '/api/movie/';

// 封装fetch，取得res.data
// function fetch(url) {
//   return new Promise((resolve, reject) => {
//     axios.get(HOST + url).then((res) => {
//       resolve(res.data)
//     }).catch((err) => {
//       reject(err)
//     })
//   })
// }

export default {
  fetchSearchData(path, query, start) {
    let url = `${HOST}${path}?q={${query}}&start=${start}`;
    return axios.get(url)
  },
  fetchMovieDetail(id) {
    let url = `${HOST}subject/${id}`;
    return axios.get(url)
  }
}

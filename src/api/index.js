import axios from 'axios'

const HOST = '/api/movie/';

export default {
  fetchSearchData(path, query, start) {
    let url = `${HOST}${path}?q={${query}}&start=${start}`;
    return axios.get(url)
  },
  fetchMovieDetail(id) {
    let url = `${HOST}subject/${id}`;
    return axios.get(url)
  },
  fetchList(path, start) {
    let url = `${HOST}${path}?start=${start}`;
    return axios.get(url)
  }
}

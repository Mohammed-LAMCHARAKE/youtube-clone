import axios from 'axios'

axios.defaults.baseURL = 'https://youtube-v31.p.rapidapi.com'
axios.defaults.headers = {
  'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
  'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
}

axios.defaults.params = {
  maxResults: 50
}

export default {
  get: axios.get
}

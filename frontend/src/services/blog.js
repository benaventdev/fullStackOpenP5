import axios from 'axios'
const baseUrl = '/api/blogs'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const postNewBlog = () => {
  axios.post(baseUrl, credential)

}
export default { getAll, postNewBlog }
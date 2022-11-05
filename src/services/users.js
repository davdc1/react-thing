import axios from 'axios'

const users = {
    getAllUsers: () => axios.get(`${process.env.REACT_APP_API_URL}users`)
}

export default users
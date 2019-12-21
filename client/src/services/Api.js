import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: 'http://localhost:3000'
        //baseURL: 'http://FILL ME LATER.elasticbeanstalk.com/'
    })
}
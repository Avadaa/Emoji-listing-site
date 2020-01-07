import axios from 'axios'

export default () => {
    return axios.create({
        //baseURL: 'http://localhost:3000'
        baseURL: 'http://emojiwall.eu-west-1.elasticbeanstalk.com'
    })
}
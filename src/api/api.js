const userApi = process.env.NODE_ENV === 'production' 
    ? '/react-allfamily/dist/static/json/proUser.json'
    : '/static/json/user.json'
    
import * as githubApi from './github'
import * as musicApi from './music'

export {
    userApi,
    githubApi,
    musicApi
}

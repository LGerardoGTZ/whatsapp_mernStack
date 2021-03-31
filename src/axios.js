import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:9000'
});

export default instance;


//At the time that you create  a instance from axios, you take a base url 
//that you are going to be able to work with using the HTTP methods like post, get, delete, etc
//in other files, that's why you import your local axios to do that.

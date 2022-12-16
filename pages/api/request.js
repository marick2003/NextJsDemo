import axios from "axios";

export const request=axios.create({
    baseURL: '/',
    timeout: 5000,
});
request.interceptors.response.use(
    response => {
      //Promise.reject(response)
      return response;
    },
    error => {

        if (error.data){
           
        }else{
            
        }
        return Promise.reject(error)


    });

export default request;

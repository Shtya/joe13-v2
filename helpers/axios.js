import axios from "axios";
import { getHeaderConfig, clearAuthInfo, baseUrl } from './utils'


export let api = axios.create({
    baseURL: baseUrl,
    timeout: 100000,
    headers: getHeaderConfig().headers
 })


 export function updateAxiosHeader(){
    api=axios.create({
        baseURL: baseUrl,
        timeout: 100000,
        headers: getHeaderConfig().headers
     })
     
     api.interceptors.response.use(function (response) {
        return response;
        }, function (error) {
          if(error.response.status == 401){
              clearAuthInfo()
              window.location.reload(true);
        }
    });
}

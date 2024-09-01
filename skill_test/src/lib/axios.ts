
import axios from "axios";

const api= axios.create({
    withCredentials:true,
    baseURL:"https://skill-test.similater.website/api/"
})
api.interceptors.request.use(
    (config:any):any=>{
        const token = localStorage.getItem('token');
        if(token){
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },(error)=>{
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response:any):any=>{
        return response
    },async(error:any)=>{
        const originalRequset=error.config
        if(error.response.status === 401){
            originalRequset._retry=true
        }
        try{
            const response = await axios.post(
                `https://skill-test.similater.website/api/auth/refreshToken`,
                {},
                {withCredentials:true}
            )
            localStorage.setItem('token',response.data.accessToken)
            api.defaults.headers.common['Authorization']=`Bearer ${response.data.accessToken}`
            return api(originalRequset);
        }catch(error){
            return Promise.reject(error);
        }
    }
)

export default api
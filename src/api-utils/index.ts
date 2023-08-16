import { API_BASE_URL, HEADERS } from "../constants";
import axios from "axios";
import { IUser } from "../Components/SignUp/SignUp";
import { ILoginUser } from "../Components/Login/Login";

// const getAuthHeaders = () => {
//     let token = localStorage.getItem(ACCESS_TOKEN);
//     if(token)
//         token = JSON.parse(token);

//     return {
//         ...HEADERS,
//         "Authorization": `Bearer ${token}`
//     }
// }


const signupNewUser = (user: IUser) =>  {
    return axios.post(API_BASE_URL + '/signup', user, { headers: HEADERS })
}

const logInUser = (user: ILoginUser) => {
    return axios.post(API_BASE_URL + '/login', user, { headers: HEADERS })
}


// const sendResetPasswordEmail = (data) => {
//     const LOGIN_HEADERS = {
//         ...HEADERS,
//         "captcha-response": data.captchaResponse
//     }
//     return axios.post(API_BASE_URL + '/password/reset/sendemail', {email: data.email}, { headers: LOGIN_HEADERS })
// }


const getJobCategoryList = () =>  {
    return axios.get(API_BASE_URL + `/get-category-list`, { headers: HEADERS })
}


const getJobList = (jobId?: string) =>  {
    return axios.get(API_BASE_URL + `/get-job-list${jobId ? '?jobId=' + jobId : ''}`, { headers: HEADERS })
}



export {
    signupNewUser,
    logInUser,
    getJobCategoryList,
    getJobList
}  



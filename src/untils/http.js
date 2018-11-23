import axios from 'axios';
import qs from 'qs';

const URL = 'http://api.langweb.zhengyang0818.cn/';

export default {
    get,
    post(url_1,param) {
        let data = qs.stringify({
            ...param,
	    	corpCode: '1111',
	    	channelCode: '2222'
        });
        return axios({
            method: 'POST',
            url: URL + url_1,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Requested-With': 'XMLHttpRequest'
            },
            data,
            timeout: 20000
        })
        .then(res => {
            loadingInstance.close();
            return res.data;
        })
        .catch(error => {
            if (error.response) {
                // The request was made, but the server responded with a status code 
                // that falls out of the range of 2xx 
                console.log(error.response);
            } else {
                // Something happened in setting up the request that triggered an Error 
                console.log('Error', error.message);
            }
        })
    },
}

export function get(url,params={}){
    return new Promise((resolve,reject) => {
            axios.get(`${URL}${url}`,{
                params:params
            })
        .then(response => {
            resolve(response.data);
        })
        .catch(err => {
            reject(err)
        })
    })
}
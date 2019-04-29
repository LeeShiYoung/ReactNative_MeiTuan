/*
 * @Author: Young 
 * @Date: 2019-04-28 18:19:31 
 * @Last Modified by: Young
 * @Last Modified time: 2019-04-29 15:36:43
 */

import axios from 'axios'

const API = axios.create({
    baseURL: 'http://capi.douyucdn.cn/api/v1',
    responseType: 'json'
});

export default API;

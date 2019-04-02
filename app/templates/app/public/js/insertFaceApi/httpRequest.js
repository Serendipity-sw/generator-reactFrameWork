import axios from 'axios'
import qs from 'qs'
import simulationData from "../simulationData/simulationData";
import {httpRealUrl} from "../util";
import {httpConfig} from "../productConfig/productConfig";

let isDev = process.env.NODE_ENV === "development",
    httpUrl = isDev ? 'http://localhost:8000/' : httpConfig,
    httpTimeOut = isDev ? 3000 : 500,
    isSimulationData = true,
    isError = false,
    errorData = {
        status: 500,
    }

/**
 * http get请求
 * @param url 请求地址
 * @param successCallBack 成功回调函数
 * @param errorCallBack 错误回调函数
 * @constructor
 */
let HttpGet = (url, successCallBack, errorCallBack) => {
    axios({
        method: 'get',
        url: httpUrl + httpRealUrl[url],
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        timeout: httpTimeOut
    }).then((resopne) => {
        successCallBack ? successCallBack(resopne.data) : console.log('告警接口请求成功,程序未处理!')
    }).catch((err) => {
        console.log(err)
        errorCallBack ? errorCallBack(isError ? err : simulationData[url]) : successCallBack ? successCallBack(isSimulationData ? simulationData[url] : errorData) : console.log('接口请求失败')
    })
}

/**
 * http post请求
 * @param url 请求地址
 * @param dataObject 请求参数
 * @param successCallback 成功回调函数
 * @param errorCallBack 错误回调函数
 * @constructor
 */
let HttpPost = (url, dataObject, successCallback, errorCallBack) => {
    dataObject = dataObject ? qs.stringify(dataObject) : dataObject;
    axios({
        method: 'post',
        url: httpUrl + httpRealUrl[url],
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        data: dataObject,
        timeout: httpTimeOut
    }).then((respone) => {
        successCallback ? successCallback(respone.data) : console.log('接口数据请求成功,但未处理')
    }).catch((err) => {
        console.log(err)
        errorCallBack ? errorCallBack(isError ? err : simulationData[url]) : successCallback ? successCallback(isSimulationData ? simulationData[url] : errorData) : console.log('接口请求失败')
    })
}

let Post = (url, dataObject) => {
    dataObject = dataObject ? qs.stringify(dataObject) : dataObject;
    return axios({
        method: 'post',
        url: httpUrl + httpRealUrl[url],
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        data: dataObject,
        timeout: httpTimeOut
    })
}

let Get = (url) => {
    return axios({
        method: 'get',
        url: httpUrl + httpRealUrl[url],
        timeout: httpTimeOut
    })
}

/**
 * http get 多并发请求
 * @param urlList ['请求地址',...]
 * @param successCallback 成功回调
 * @param errorCallback 失败回调
 */
let httpUrlGetAll = (urlList, successCallback, errorCallback) => {
    let list = urlList.map(item => {
            return Get(item)
        }),
        resultData = new Array(urlList.length)

    axios.all(list).then(axios.spread((...resultData) => {
        resultData = resultData.map(item => item.data)
        successCallback ? successCallback(resultData) : console.log('接口数据请求成功,但未处理')
    })).catch((err) => {
        console.log(err)
        resultData = urlList.map(item => {
            return simulationData[item]
        })
        errorCallback ? errorCallback(isError ? err : resultData) : successCallback ? successCallback(isSimulationData ? resultData : errorData) : console.log('接口请求失败')
    })
}


/**
 * http post 多并发请求
 * @param urlList [{url:'',dataObject:{请求参数}},...]
 * @param successCallback 成功回调
 * @param errorCallback 失败回调
 */
let httpUrlPostAll = (urlList, successCallback, errorCallback) => {
    let list = urlList.map(item => {
            return Post(item.url, item.dataObject)
        }),
        resultData = new Array(urlList.length)

    axios.all(list).then(axios.spread(() => {
        resultData = resultData.map(item => item.data)
        successCallback ? successCallback(resultData) : console.log('接口数据请求成功,但未处理')
    })).catch((err) => {
        console.log(err)
        resultData = urlList.map(item => {
            return simulationData[item.url]
        })
        errorCallback ? errorCallback(isError ? err : resultData) : successCallback ? successCallback(isSimulationData ? resultData : errorData) : console.log('接口请求失败')
    })
}


/**
 * http post请求
 * @param url 请求地址
 * @param dataObject 请求参数
 * @param successCallback 成功回调函数
 * @param errorCallBack 错误回调函数
 * @constructor
 */
let HttpPostFile = (url, dataObject, successCallback, errorCallBack) => {
    axios({
        method: 'post',
        url: httpUrl + httpRealUrl[url],
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        data: dataObject,
    }).then((respone) => {
        successCallback ? successCallback(respone.data) : console.log('接口数据请求成功!但未处理')
    }).then((err) => {
        console.log(err)
        errorCallBack ? errorCallBack(isError ? err : simulationData[url]) : successCallback ? successCallback(isSimulationData ? simulationData[url] : errorData) : console.log('接口请求失败')
    })
}

export default {
    HttpGet,
    HttpPost,
    HttpPostFile,
    httpUrlPostAll,
    httpUrlGetAll,
}

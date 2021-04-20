import axios from 'axios';

// method to process all types of request like GET | POST | PUT | DELETE
const httpCall = (
    methodType: 'GET',
    apiPath: string,
    body: any,
    urlParam: any,
    callback?: (responseData: any) => any,
    errorCallback?: (reason: any) => any,
    responseType?: any
) => {
    return axios({
        method: methodType,
        url: apiPath,
        responseType: responseType || 'json',
        params: urlParam,
        data: body,
        timeout: 60000,
    })
        .then(res => {
            callback && callback(res.data);
        })
        .catch(err => {
            errorCallback && errorCallback(err);
        });
};

// Method to process get request
export function httpGet(
    apiPath: string,
    urlParam: any,
    callback?: (responseData: any) => any,
    errorCallback?: (reason: any) => any
) {
    return httpCall('GET', apiPath, undefined, urlParam, callback, errorCallback, undefined);
}
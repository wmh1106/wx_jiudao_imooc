import {
    apiUrl,
    apiKey
} from '../config.js'

class HTTP {

    constructor() {
    }

    request({
        url,
        method = "GET",
        header = {},
        data,
        success,
        error,
        fail
    }) {



        wx.request({
            url: apiUrl + url,
            data: data,
            method: method,
            header: {
                'content-type': 'application/json',
                'appkey': apiKey,
                ...header
            },
            success: function(res) {
                const {
                    statusCode,
                    data
                } = res
                if (statusCode === 200) {
                    success && success(data)
                } else {
                    error && error(data)
                }
            },
            fail: function(error) {
                fail && fail(error)
            }
        })

    }
}


export { HTTP}
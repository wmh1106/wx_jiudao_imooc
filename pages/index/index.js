import { HTTP} from '../../utils/http.js'

const http = new HTTP()

Page({
    data: {
        index:0
    },
    onReady() {
        http.request({
            url: '/classic/latest',
            success: (data) => {
                const [year, month, day] = data.pubdate.split('-')

                this.setData({
                    ...data,
                    year,
                    "index": this.zeroPadding(data.index),
                    "month": this.conversionMonth(parseInt(month))
                })
            },
            error: (data) => {
                console.error(data)
            },
            fail: (error) => {
                console.error(error)
            }
        })
    },
    zeroPadding(number){
        return number<9?"0"+number:""+number;
    },
    conversionMonth(number) {
        const month = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        if (typeof number !== 'number' && number > 12 && number < 0) return '参数错误';
        return month[number]
    },
    priorPeriod(){
        const idx = this.data.index
        http.request({
            url: `/classic/${idx}/previous`,
            success: (data) => {
                const [year, month, day] = data.pubdate.split('-')
                this.setData({
                    ...data,
                    year,
                    "month": this.conversionMonth(parseInt(month))
                })
            },
            error: (data) => {
                console.error(data)
                wx.showToast({
                    title:data.msg,
                    icon:'none',
                    mask:true
                })
            },
            fail: (error) => {
                console.error(error)
            }
        })
    },
    nextPeriod(){
        const idx = this.data.index
        http.request({
            url: `/classic/${idx}/next`,
            success: (data) => {
                const [year, month, day] = data.pubdate.split('-')
                this.setData({
                    ...data,
                    year,
                    "month": this.conversionMonth(parseInt(month))
                })
            },
            error: (data) => {
                console.error(data)
                wx.showToast({
                    title: data.msg,
                    icon: 'none',
                    mask: true
                })
            },
            fail: (error) => {
                console.error(error)
            }
        })
    },
    controlMusic(){
        
    },
    onShareAppMessage(res) {
        if (res.from === 'menu') {
            console.log(res.target)
        }
        return {
            title: this.data.title,
            path: '/page/index/index'
        }
    }
})
import { HTTP} from '../../utils/http.js'

const http = new HTTP()



Page({
    data: {
        index:0
    },
    onReady: function() {
        http.request({
            url: '/classic/latest',
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
            },
            fail: (error) => {
                console.error(error)
            }
        })
    },
    conversionMonth(number) {
        const month = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        if (typeof number !== 'number' && number > 12 && number < 0) return '参数错误';
        return month[number]
    },
    priorPeriod: function(){
        const idx = this.data.index
        http.request({
            url: `/classic/${idx}/previous`,
            success: (data) => {
                /*
                "谁念过 千字文章 秋收冬已藏"
fav_nums
:
10
id
:
1
image
:
"http://bl.7yue.pro/images/music.7.png"
index
:
7
like_status
:
0
pubdate
:
"2018-06-22"
title
:
"不才 《参商》"
type
:
200
url
:
"http://music.163.com/song/media/outer/url?id=29719651.mp3"
                */ 
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
    nextPeriod: function(){
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
    }
})
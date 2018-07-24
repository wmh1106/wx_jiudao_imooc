import { HTTP } from '../../utils/http.js'

const http = new HTTP()

Page({
    data: {

    },
    onReady(){
        http.request({
            url: "/classic/favor",
            success: (data) => {
                console.log(data)
                this.setData({
                    myLoveBookList: data
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
    goToAbout(){
        wx.navigateTo({
            url:"./about/about"
        })
    },
    goToMyBookList(){
        wx.navigateTo({
            url: "./myBookList/myBookList",
        })
    }
   
})

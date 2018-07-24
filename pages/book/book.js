import {HTTP} from '../../utils/http.js'
const http = new HTTP()

Page({

  
  data: {
      focus:false
  },

  
  onReady: function () {
    // http.request({
    //     url:'/book/hot_list',
    //     success: (data) => {
    //         console.log(data)
    //         this.setData({
    //             bookList: data
    //         })
    //     },
    //     error: (data) => {
    //         console.error(data)
    //     },
    //     fail: (error) => {
    //         console.error(error)
    //     }
    // })
  },
  handleFocus(event){
      this.setData({
          focus:true
      })
  },
    handleBlur(event){
        this.setData({
            focus: false
        })
    }
  
})
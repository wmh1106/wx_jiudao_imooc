/**
 * 数据的来源：
 * 1. 直接写在 WXML
 * 2. JS => WXML
 * 3. SERVER => JS => WXML
 * 
 * 
 * 封装性、开放性
 * 封装在内部、开放出来
 * 组件的粒度
 * 组件可以是简单的功能、也可以是复杂的功能
 * */ 

Component({
    properties: {
        "count": {
            type: Number,
            value: 0
        },
        like: {
            type: Boolean,
            value: false
        }
    },
    data: {
        // 图片资源
        imgUrl:{
            "likeImg":"../images/icon/love_active.png",
            "unLikeImg":"../images/icon/love.png"
        }
    },
    methods: {
        handleIsLove: function(event) {
            let {
                isActive
            } = this.data
            this.setData({
                isActive: !isActive
            })
        }
    }
})
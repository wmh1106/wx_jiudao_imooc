// components/like/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        "count": {
            type: Number,
            value: 0
        }
    },
    /**
     * 组件的初始数据
     */
    data: {
        isActive: false
    },
    /**
     * 组件的方法列表
     */
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
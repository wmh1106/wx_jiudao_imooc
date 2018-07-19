// pages/my/love/love.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})

var data = {
    uuid: function() {
        if (uuidVal === '') {
            updateUserInfo(dt)
            return retDesc
        } else {
            return uuidVal
        }
    }
}

function updateUserInfo(dt) {
    ////console.log(dt);
    var host = 'http://adv.hxdaily.cn';
    $.ajax({
        type: "post",
        url: host + "/ljch-front/api/loginByPhone.jhtml",
        async: false,
        data: dt,
        dataType: "json",
        success: function(ret) {
            if (ret.status == 0) {
                //console.log(ret);
            } else {
                //console.log(dt);
                //console.log(ret);
                if (ret.status == -1) {
                    //console.log('失败：'+ret)
                    showtoastFromDiv('验证码不正确,请重试');
                }
                if (ret.status == 1) {
                    var retDesc = ret.desc
                    $(location).attr('href', 'home.html?uuid=' + ret.desc);

                }
            }
        }
    });
}
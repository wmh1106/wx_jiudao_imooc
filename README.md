# 微信小程序

- `swiper-item`仅可放置在`<swiper/>`组件中，宽高自动设置为 100%。
- 顶部导航条的背景：可以在当前页面的`name.json`的 window 选项配置颜色
- 图片的路径：使用绝对路径（以根目录开头）、相对路径
- 垂直方向的空隙用 `px`，水平方向的空隙用`rpx`
- 绑定标签属性的值，如果不用花括号，就一律是字符串，也就是真。如果用变量必须用花括号包裹起来
- 声明周期：
  - onLoad 页面初始化
  - onShow 页面显示
  - onReady 页面渲染完成
  - onHide 页面隐藏
  - onUnload 页面关闭
- 数据绑定：单向数据绑定
  - `this.setData({})`
- `wx:if="{{判断条件}}"`
  - `block wx:if`block 包装元素，不在页面渲染
  - 对比`hidden`属性
- 循环：用写`wx:key`
- 事件：所有事件都加前缀`bind`，比如`bindtap`
- 跳页面：[链接](https://developers.weixin.qq.com/miniprogram/dev/api/ui-navigate.html)
- 模板 template

  ```wxml
  //定义模板
  <template name="msgItem">
      <view>
          <text> {{index}}: {{msg}} </text>
          <text> Time: {{time}} </text>
      </view>
  </template>
  ```

  ```wxml
  // 先引入
  <import src="tmp/msg_item_template.wxml" />
  // 在使用，用 is 确定模板，用 data 传入数据
  <template is="msgItem" data="{{...item}}"/>
  ```

- 页面接收上一个页面数据，通过生命周期函数的参数 object
- 组件自定义属性、获取属性值
  - event.currentTarget.dataset.postid
- 数据打散：`[...arr]`,`{...object}`
- 数据缓存：Storage，有  同步异步
  - set
  - get
  - remove
  - clear
- 同步、异步根据业务场景来确定。
- 在`app.js`定义全局变量，全局状态用
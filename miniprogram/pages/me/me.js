var db = wx.cloud.database();
const app = getApp()
Page({
  options: {
    addGlobalClass: true,
  },
  data: {
    avatarUrl: '',
    score: '',
    order: '',
    userInfo: {
      nickName:'登录',
    },
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },


  onLoad: function(options) { //通过openid获取到数据库中的用户信息
    db.collection('userInfo').get({
      success: res => {
        console.log(res.data)
        this.setData({
          avatarUrl: res.data[0].avatarUrl,
          nickName: res.data[0].userInfo.nickName,
          score: Math.round(res.data[0].score),
          order: res.data[0].order.tea
        })

      }
    })


  },
  goAbout: function() {
    wx.navigateTo({
      url: '../about/about',
    })

  },

  feedback: function() {
    wx.navigateTo({
      url: '../feedback/feedback',
    })
  },

  clickGit: function() {
    wx.setClipboardData({
      data: this.data.github,
      success: res => {
        wx.showModal({
          title: '已复制github地址',
          content: '如有需要欢迎访问本程序Github项目！',
        })
      },
    })
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

  },






  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

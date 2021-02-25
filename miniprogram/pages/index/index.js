const db = wx.cloud.database();
Page({
  options: {
    addGlobalClass: true,
  },
  data: {
   
    elements: [
      {
        title: '投票',
        name: 'teacher',
        id:'teacher',
        icon: 'copy',
        color: 'cyan'
      },
      {
        title: '评分',
        name: 'setFile',
        id:'setFile',
        icon: 'settings',
        color: 'pink'
      },
    ]
  },

  onLoad: function(options) {
    db.collection('userInfo').get({
      success: res => {
        console.log(res)
        this.setData({
          userInfo: res.data[0].userInfo,
          avatarUrl: res.data[0].avatarUrl,
          userName: res.data[0].name,
          userClass: res.data[0]._class,
        })
      }
    })
  },
})
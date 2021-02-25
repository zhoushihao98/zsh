const db = wx.cloud.database();
const app = getApp();
Page({
  data: {
    datas:{
      name:"",
      list:[]
    }
   
  },
  formSubmit: function(res) {
    const userValue = res.detail.value;
    if ((userValue.userClass && userValue.userName && userValue.userPhone && userValue.userNumber) == '') {
      wx.showModal({
        title: '错误',
        content: '请将所有信息填写完整！',
      })
    } else {
      wx.showModal({
        title: '确认信息',
        content: '请确认所有信息是否正确，一但提交无法更改！',
        success: res => {
          wx.navigateTo({
            url: '../success/success',
          })
        }
      })
    }
  },
  onLoad(){
    let datas=(wx.getStorageSync('data')||'');
    // console.log(datas.lists);

    this.setData({
      list:datas.arrays
    })
  },


})
const app = getApp();
Page({

  data: {
    list: [],
    value: ""

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let li = (wx.getStorageSync('list') || '');
    // console.log(li.list);

    this.setData({
      list: li.list
    })

  },
  formsubmit() {
    let value = this.data.value;
    if (value == "") {
      wx.showModal({
        title: '错误',
        content: '选项不能为空',
      })
    } else {
      wx.showModal({
        title: '确认信息',
        content: '请确认所有信息是否正确，一但提交无法更改！',
        success(res) {
          if(res.confirm){wx.showModal({
            title: '提交成功',
            content: '信息已提交成功！',
            success:res=>{
              wx.navigateTo({
                url: '../success/success',
              })
            }
          })}else if(res.cancel){}
          
        }
      })
    }


  },
  handleGroup(e) {
    // console.log(e);
    let value = e.detail.value;
    this.setData({
      value
    })
  }

})
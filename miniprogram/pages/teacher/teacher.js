
Page({

  data: {
    list:[]

  },
  bindBut(e){
    const list = this.data.list;
    if(list&&list.length ==  0){
      wx.showModal({
        title:'错误',
        content:'请填入投票对象'
      })
    }else{
      wx.navigateTo({
        url: '../estimate/estimate',
      })
    }
    
  },
  // 删除重复值
  newArr:function(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){ 
            //如果第一个等于第二个，splice方法删除第二个
            arr.splice(j,1);
            j--;
            };
        };
    };
    return arr;
  },
  
  
  
  // 获取数据
   inputchange(e){
// console.log(e);
    let b=e.detail.value;
    // 把多空格变成单空格
    let c= b.replace("/\s+/",'');
    // 以空格为标志分开
    let lists =c.split(" "); 
    //trim(); 删除空白符（包括空格） filter（） 返回符合要求的新数组
    lists=lists.filter((item)=>{
      return item&&item.trim();
    });
    // 删除数组中重复对象
  let list = this.newArr(lists);
      // console.log(list);
    this.setData({
      list
    });
  
   },
  
  //  数据缓存
   onHide(){
    wx.setStorageSync('list', this.data)
  },
  
})
var app=getApp();
Page({
  data: {
     list:["卫生","整洁度","综合评分"],
     lists:[],
     splitArray:[],
     arrays:[]
  },
handleChange(){
  this.data.arrays=this.data.lists.concat(this.data.splitArray);
  wx.navigateTo({
    url: '../register/register',
  })
},
checkboxchange(e){
  // 
  let lists=e.detail.value;

  this.setData({
    lists
  })

},

// 删除重复的数据

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
 inputchange4(e){
  let list=[];
  let b=e.detail.value;
  let c= b.replace("/\s+/",'');
  list =b.split(" "); 
  let splitArray=this.data.splitArray;
  splitArray=splitArray.concat(list);
  splitArray=splitArray.filter((item)=>{
    return item&&item.trim();
  })
  
  splitArray= this.newArr(splitArray);
  // console.log(splitArray);
  this.setData({
    splitArray
  });

 },

//  数据缓存
 onHide(){
  wx.setStorageSync('data', this.data)
},

 })
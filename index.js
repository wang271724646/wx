var eval1=require("./eval.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nums:"",
    result:"",
    flag:true 
  },
  clear(){
    this.setData({
      flag: true
    })
    this.setData({
      nums: ""
    })
    this.setData({
      result: ""
    })
  },
  deng(){

    if(this.data.nums==""){
      this.setData({
        result:""
      })
    }else{
      var that=this;
    this.setData({
      result: (function(){
        if (eval1(that.data.nums)){
          return eval1(that.data.nums)
        }else{
          return eval1(that.data.nums.slice(0,-1))
        }
      })()
    })
    }
  },

  tool(e){
    if(!this.data.flag){
      return;
    }
    this.setData({
      flag:false
    })
    this.setData({
      nums: this.data.nums + e.target.dataset.text
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  
  getNum(e){
    this.setData({
      flag: true
    })
    this.setData({
      nums: this.data.nums + e.target.dataset.text
    })
   
  },
  /**后退的函数**/
  back(){
    //改变开关的值
    this.setData({
      flag: true
    })

    // 如果没有数字了，就不计算了
    if (!this.data.nums) {
      this.setData({
        result: ""
      })
    }else{

    // 减掉最后一位数字
    this.setData({
      nums:this.data.nums.slice(0,-1)
    })
    //重新计算
    var that = this;
    this.setData({
      result: (function () {
        if (eval1(that.data.nums)) {
          return eval1(that.data.nums)
        } else {
          return eval1(that.data.nums.slice(0, -1))
        }
      })()
    })
    }

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
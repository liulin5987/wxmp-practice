// pages/detail/detail.js
import {
  getdetail,
  goodstitle,
  shopinfo 
} from '../../service/detail'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iid:"",
    topimg:[],
    goodstitle:"",
    shopInfo:"",
    shopsells:"0"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      iid:options.iid
    })
    getdetail(this.data.iid).then(res =>{
      console.log(res)
      this.setData({
        //获得轮播图数据
        topimg:res.data.result.itemInfo.topImages,
        //获取标题栏信息
        goodstitle: new goodstitle(res.data.result.itemInfo,res.data.result.columns),
        //获取商铺信息
        shopInfo: new shopinfo(res.data.result.shopInfo),
        shopsells:this.data.shopInfo.sells
      })
      this.sellfilter()
      console.log(this.data.shopInfo)
    })

  },
  //销售量过滤器
  sellfilter(){
    if(this.data.shopsells > 10000){
      this.setData({
        shopsells: (shopsells/10000).toFixed(1) + '万'
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
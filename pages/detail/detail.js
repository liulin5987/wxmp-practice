// pages/detail/detail.js
import {
  getdetail,
  goodstitle,
  shopinfo,
  detailinfo,
  tableinfo
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
    shopsells:"0",
    detailInfo:"",
    tableInfo:''
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
        //获取详细信息
        detailInfo: new detailinfo(res.data.result.detailInfo),
        //获取表格信息
        tableInfo: new tableinfo(res.data.result.itemParams)
      }) 
      this.setData({
        shopsells: this.data.shopInfo.sells
      })
      this.sellfilter(this.data.shopsells)
      console.log(this.data.tableInfo)
    })

  },
  //销售量过滤器
  sellfilter(shopsells){
    if(shopsells > 10000){
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
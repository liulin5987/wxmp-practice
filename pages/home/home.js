// pages/home/home.js
//引入网络相关方法
import {getmultidata,
        getgoodsdata} from "../../service/home"
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    recommends:[],
    swiperimg:[],
    goods:{
      "pop":{page:0,list:[]},
      "new":{page:0,list:[]},
      "sell":{page:0,list:[]}
    },
    currentgoods:[],
    currenttype:"pop",
    height:0
  },
  /**
   * 
   * 页面中使用到的相关函数
   */
  //监听tabcontrol点击
  tabclick(event){
    console.log(event)
    let type = ['pop','new','sell'];
    this.setData({
      currenttype:type[event.detail]
    })  
    this.getgoods(this.data.currenttype);
  },
  //获取商品数据
  getgoods(type){
    let page = this.data.goods[type].page += 1;
    getgoodsdata(type,page).then(res => {
      // console.log(res.data.data.list)
      this.data.goods[type].list.push(...res.data.data.list)
      this.setData({
        currentgoods:this.data.goods[type].list
      });
     
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取轮播图和推荐图片
    getmultidata().then(res => {
      console.log(res)
      this.setData({
          //获取轮播图数据
          swiperimg: res.data.data.banner.list,
          //获取推荐图片
          recommends: res.data.data.recommend.list
        }); 
    })
    //获取展示栏图片
    this.getgoods('new');
    this.getgoods('sell');
    this.getgoods('pop');
    //获取组件高度
   
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
    this.getgoods(this.data.currenttype)
  },
  
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onPageScroll:function(event){
    this.setData({
      height: event.scrollTop
    })
   
  }
})
// components/backtop/backtop.js
Component({
  /**
   * 组件的属性列表
   */
 
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    backtop(){
      wx.pageScrollTo({
        scrollTop:0,
        duration: 300,
      })
    }
  }
})

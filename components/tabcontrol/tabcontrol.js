// components/tabcontrol/tabcontrol.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentindex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabclick(event){
      let index = event.target.dataset.index
      this.setData({
        currentindex: index
      })
      //将index传递到页面
      this.triggerEvent('tabclick',index,{})
      
    }
  }
})

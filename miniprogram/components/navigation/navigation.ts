// components/navigation/navigation.ts
import { Text } from "../../config/text"

Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    title: Text.Albums.Title
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  lifetimes: {
    attached: function () {
      const app: IAppOption = getApp();
      this.setData({
        menuHeight: app.globalData.navigationInfo.menuHeight,
        menuTop: app.globalData.navigationInfo.menuTop,
      })
      // console.log(this.data.menuHeight)
    },
  }
})
export const request = (params) => {
  return new Promise((resolve,reject) => {
    const baseURL = "https://api-hmugo-web.itemima.net/api/public/v1"
    wx.request({
      url: baseURL + params.url,
      success:resolve,
      fail:reject,
      data:params.data
    })
  })
}
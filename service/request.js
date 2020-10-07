export  default function(options){
  return new Promise((resolve,reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'get',
      timeout:5000,
      data: options.data || null,
      success:resolve,
      fail:reject
    })
  })
}

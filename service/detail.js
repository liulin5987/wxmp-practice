import request from './request'

const baseURL = 'http://152.136.185.210:8000/api/w6'

export function getdetail(iid){
  return request({
    url:baseURL + '/detail',
    data:{
      iid 
    }
  })
}

export class goodstitle{
  constructor(itemInfo,columns){
    this.title = itemInfo.title,
    this.price = itemInfo.lowNowPrice,
    this.oldPrice = itemInfo.oldPrice,
    this.discountDesc = itemInfo.discountDesc,
    this.columns = columns
  }
}

export class shopinfo{
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo,
    this.name = shopInfo.name,
    this.sells = shopInfo.cSells,
    this.goods = shopInfo.cGoods,
    this.score = shopInfo.score
  }
}
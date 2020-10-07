import request from './request'

const baseURL = 'http://152.136.185.210:8000/api/w6'

export function getmultidata(){
  return request({
    url: baseURL + '/home/multidata'
  })
}
export function getgoodsdata(type,page){
  return request({
    url:baseURL + '/home/data',
    data:{
      type,
      page
    }
  })
}
import XHR from '@/model/xhr'
import Base from '@/model/base'

export default class MyGoods extends Base{
  constructor (data) {

    data = data || {}

    super(data)

    this.id = data.id || ''
    this.name = data.name || ''
    this.price = data.price || ''
    this.cover = data.cover || ''
    this.file = data.file || ''
    this.detail = data.detail || ''

    this.test = data.test || ''

    this.api_get = `${process.env.api}/goods/list`
    this.api_del = `${process.env.api}/goods/del`
    this.api_detail = `${process.env.api}/goods/detail`
    this.api_edit = `${process.env.api}/goods/edit`
  }

  save () {
    new XHR({
      request: {
        url: 'http://127.0.0.1:3000/goods/save',
        data: {
          name: this.name,
          price: this.price,
          cover: this.cover,
          file: this.file,
          detail: this.detail
        },
        method: 'post'
      }
    }).httpRequest()
  }

  edit () {
    new XHR({
      request: {
        url: 'http://127.0.0.1:3000/goods/edit',
        data: {
          id: this.id,
          name: this.name,
          price: this.price,
          cover: this.cover,
          file: this.file,
          detail: this.detail
        },
        method: 'post'
      }
    }).httpRequest()
  }
}

import XHR from '@/model/xhr'

export default class Base {
  constructor(data) {

    this.id = data.id || ''
  }

  setDetailParams() {
    return {
      id: this.id
    }
  }

  setDelParams() {
    return {
      id: this.id
    }
  }

  del () {
    let http = new XHR({
      request: {
        url: this.api_del,
        method: 'post',
        data: this.setDelParams()
      }
    })

    http.httpSuccess = res => {

    }

    http.httpRequest()
  }

  getDetail () {
    console.log(this.id)

    let http = new XHR({
      request: {
        url: this.api_detail,
        method: 'get',
        params: this.setDetailParams()
      }
    })

    http.httpSuccess = res => {
      let m = this.constructor
      let d = new m(res.data.data)

      for(let k in d) {
        this[k] = d[k]
      }
    }

    http.httpRequest()
  }
}

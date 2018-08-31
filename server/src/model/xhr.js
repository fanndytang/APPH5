import axios from 'axios'

export default class XHR {
  constructor(data) {

    data = data || {}

    this.request = data.request || {}
  }

  httpRequest () {

    let $http = axios.create()

    $http(this.request).then((res) => {
      this.httpSuccess(res)
     // console.log(res)
    }).catch(() => {
      console.log('error')
    })

  }

  httpSuccess(res) {

  }

}

import XHR from '@/model/xhr'

export default class List {
  constructor(data) {

    this.model = data.model || ''
    this.p = data.p || 1
    this.rows = data.rows || 10
    this.pages = data.pages || 0
    this.totals = data.totals || 0

   // this.$model = new this.model()

    this.data = []
    this.dataList = []   //  所有已获取的数据

  }

  get () {
    let http = new XHR({
      request: {
        url: this.model.api_get,
        method: 'get'
      }
    })
    http.httpSuccess = res => {
   //   console.log(res)
      let data = res.data.data

      let m = this.model.constructor

      this.data = data.map(item => {
        //return new m(item)
        let a = new m(item)
        return a
      //  console.log(new m(item))
       // console.log(item)
      })

      console.log(this.data)

    }
    http.httpRequest()
  }
}

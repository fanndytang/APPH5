<template>
  <div>
    <input type="hidden" :value="value" @input="value = $event.target.value">

    <input type="file" @change="upload">
  </div>
</template>

<script>
  import XHR from '@/model/xhr'
  export default {
    props: {
      value: String
    },
    data () {
      return {

      }
    },
    methods: {
      upload (e) {
        let data = new FormData()
        data.append('file', e.target.files[0])

        let $http = new XHR({
          request: {
            url: `${process.env.api}/upload`,
            data: data,
            method: 'post'
          }
        })

        $http.httpSuccess = (res) => {
          //console.log(res)
        //  console.log(res)
          this.$emit('input', res.data.filename)
        }

        $http.httpRequest()

      }
    }
  }
</script>

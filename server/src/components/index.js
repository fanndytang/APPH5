import upload from '@/components/upload'
import myList from '@/components/list'

export default {
  install: function(Vue){
    Vue.component('upload', upload)
    Vue.component('my-list', myList)
  }
}

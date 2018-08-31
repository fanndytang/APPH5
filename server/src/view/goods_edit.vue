<template>
  <div>
    <form>
      <div class="form-item">
        <label>商品名称</label>
        <input type="text" v-model="model.name" >
      </div>

      <div class="form-item">
        <label>商品价格</label>
        <input type="text" v-model="model.price">
      </div>

      <div class="form-item">
        <label>商品封面</label>
        <upload v-model="model.cover"></upload>
      </div>

      <div class="form-item">
        <label>商品图片</label>
        <upload v-model="model.file"></upload>
      </div>

      <div class="form-item">
        <label>商品详情</label>
        <upload v-model="model.detail"></upload>
      </div>

      <button type="button" @click="$route.query.id ? model.edit() : model.save()">确定</button>
    </form>
  </div>
</template>

<script>
  import MyGood from '@/model/goods'
  export default {
    data () {
      return {
        model: new MyGood({id: this.$route.query.id})
      }
    },
    created () {
      this.model.getDetail()
    },
    mounted () {
     // this.model.detail()
      console.log()
      console.log(this.$route)
    },
    methods: {

    }
  }
</script>

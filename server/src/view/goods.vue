<template>
  <div>
    <my-list :model="model" :column="column"></my-list>
  </div>
</template>

<script>

  import MyGoods from "@/model/goods";

  export default {
    data () {
      return {
        model: new MyGoods(),
        column: [
          {label: '商品名称', prop: 'name'},
          {label: '商品价格', prop: 'price'},
          {label: '商品封面', prop: 'cover', type: 'img'},
          {label: '商品图片', prop: 'file', type: 'img'},
          {label: '商品详情', prop: 'detail', type: 'img'}
        ]
      }
    }
  }
</script>

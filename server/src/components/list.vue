<template>
  <div>
    <table>
      <thead>
      <tr>
        <th v-for="el,k in column" :key="k">{{ el.label }}</th>
        <th>操作</th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="item,i in list.data" :key="i">
        <td v-for="el,k in column" :key="k">
          <img v-if="el.type == 'img'" :src="item[el.prop]">

          <div v-else>{{ item[el.prop] }}</div>
        </td>
        <td>
          <button class="btn btn-primary btn-sm" type="button" @click="$router.push({name: `${$route.name}_edit`, query: item.setDetailParams()})">编辑</button>
          <button class="btn btn-primary btn-sm" type="button" @click="item.del()">删除</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import List from '@/model/list'

  export default {
    props: {
      model: Object,
      column: Array
    },
    data () {
      return {
        list: []
      }
    },
    created () {
      this.list = new List({
        model: this.model
      })

      this.list.get()
    },
    mounted () {
console.log(this.$route)
    }
  }
</script>

<style>
  table td img {
    max-height: 30px;
    max-width: 30px;
  }
</style>

<template>
  <div class="hello">
      <el-button type="danger"><router-link to="/gysSysterm">供应商管理平台</router-link></el-button>
      <el-button type="primary"><router-link  to="/hxqySysterm">核心企业管理平台</router-link></el-button>
      <el-button type="success"><router-link to="/yhSysterm">银行管理系统</router-link></el-button>
      <el-button type="info"><router-link to="/dbgsSysterm">担保公司管理平台</router-link></el-button>
      <el-button type="warning"><router-link to="/jrSysterm">经融管理平台</router-link></el-button>
      
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello .el-button a{
  color:white;
  text-decoration: none;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

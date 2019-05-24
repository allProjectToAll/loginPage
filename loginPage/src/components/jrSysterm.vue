<template>
  <div class="jrSysterm">
    <p class="systermName">经融管理平台</p>
      <div class="loginBox">
          <!-- <p class="systermName">经融管理平台</p> -->
          <el-input v-model="userName" placeholder="请输入用户名"></el-input>
          <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
          <el-button type="">登录</el-button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'jrSysterm',
  data () {
    return {
      userName:"",
      password:"",
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jrSysterm{
    width:100%;
    height:100%;
    min-width:1150px;
    position:relative;
    background:url("../assets/bg5.jpg") no-repeat 50%;
    background-size: cover;
    overflow: hidden;
}
.loginBox{
    border:1px solid #ccc;
    /* height: 350px; */
    height:280px;
    width: 400px;
    position: absolute;
    left: 50%;
    top: 70%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 10px;
    background:#2c3b4e;
}
.systermName{
    font-size:60px;
    text-align:center;
    margin-top:30px;
    color:#d08e75;
    letter-spacing: 8px;
    /* padding: 20px 0; */
    /* color:blueviolet; */
}
.el-input{
    width:340px;
    margin-left:30px;
    height:50px;
    margin-top:30px;
    
}
.el-button{
    width:340px;
    margin-left:30px;
    margin-top:30px;
    height:50px;
    font-size:26px;
    background:#d79fb8;
    color:white;
    border:1px solid #d79fb8;
}
.el-button:hover{
    border:1px solid #eee;
}
</style>
<style>
.gysSysterm .el-input__inner{
    height:50px!important;
    border:1px solid blue!important;
}
</style>
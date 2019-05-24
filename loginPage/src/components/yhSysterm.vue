<template>
  <div class="yhSysterm">
    <p class="systermName">银行管理系统</p>
      <div class="loginBox">
          <!-- <p class="systermName">银行管理系统</p> -->
          <el-input v-model="userName" placeholder="请输入用户名"></el-input>
          <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
          <el-button type="primary">登录</el-button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'yhSysterm',
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
.yhSysterm{
    width:100%;
    height:100%;
    min-width:1150px;
    position:relative;
    background:url("../assets/bg3.jpg") no-repeat 50%;
    /* background-size: cover; */
    background-size:100% 200%;
    overflow: hidden;
}
.loginBox{
    /* border:1px solid #ccc; */
    /* height: 350px; */
    height:260px;
    width: 400px;
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translateX(-50%) translateY(-50%);
    /* border-radius: 10px; */
    /* background:white; */
}
.systermName{
    font-size:50px;
    margin:40px 0 0 100px;
    /* text-align:center; */
    padding: 20px 0;
    letter-spacing: 4px;
    /* color:skyblue; */
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
}
</style>
<style>
.gysSysterm .el-input__inner{
    height:50px!important;
    border:1px solid blue!important;
}
</style>

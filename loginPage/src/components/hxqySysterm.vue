<template>
  <div class="hxqySysterm">
    <img src="../assets/map.png" class="bg" />
      <div class="loginBox">
          <p class="systermName">核心企业管理平台</p>
          <el-input v-model="userName" placeholder="请输入用户名"></el-input>
          <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
          <el-button type="warning">登录</el-button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'hxqySysterm',
  data () {
    return {
      userName:"",
      password:"",
    }
  }
}
</script>
<style scoped>
.hxqySysterm{
    width:100%;
    height:100%;
    position:relative;
    min-width:1150px;
    background:#2c3b4e;
}
.bg{
  width:500px;
  position:absolute;
  left:100px;
  top:50%;
  transform: translateX(0) translateY(-50%);
}
.loginBox{
    border:1px solid #ccc;
    height: 350px;
    width: 400px;
    position: absolute;
    /* left: 50%; */
    top: 50%;
    right:0;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 10px;
    background:white;
}
.systermName{
    font-size:30px;
    text-align:center;
    padding: 20px 0;
    color:#CD5C5C;
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
    background:#CD5C5C;
}
.el-button:hover{
    background:#CD5C5C;
    color:white;
    border:none;
    /* box-shadow:5px 5px 5px #ccc; */
    box-shadow:0 0 2px 2px #ccc;
}
@media (min-width: 1600px){
    .bg{
        width:400px;
      }
      .loginBox{
        right:100px;
      }
  }
 @media (max-width: 1300px){
    .bg{
        width:350px;
      }
      .loginBox{
        right:0;
      }
  }
  @media (max-width: 1200px){
    .bg{
        width:300px;
      }
      .loginBox{
        right:-50px;
      }
  }
</style>
<style>
.gysSysterm .el-input__inner{
    height:50px!important;
    /* border:1px solid blue!important; */
}
</style>

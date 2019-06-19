<template>
    <div>
        <el-carousel height="540px" width="100%" margin="0">
            <el-carousel-item>
            <img src="./assets/1.jpg" alt="" width="100%" height="540">
            </el-carousel-item>
            <el-carousel-item>
            <img src="./assets/2.jpg" alt="" width="100%" height="540">
            </el-carousel-item>
            <el-carousel-item>
            <img src="./assets/3.jpg" alt="" width="100%" height="540">
            </el-carousel-item>
        </el-carousel>
        <img id="homePic" src="./assets/index_01.png" alt="" width="100%">
        <el-row>
            <el-col :span="2"><img src="./assets/ren.jpg" alt=""></el-col>
            <el-col :span="3" offset="13"><el-link><span class="icon-wechat"></span> 公众微信</el-link></el-col>
            <el-col :span="3"><el-link><span class="icon-mail"></span> 企业邮箱</el-link></el-col>
            <el-col :span="3"><el-link><span class="icon-oa"></span> OA办公</el-link></el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name:'Home'
}
</script>

<style scoped>
  /* .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  } */

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  #homePic{
      margin-top: 20px;
  }
  
</style>

<template>
    <div>
        <img src="./assets/xt_02.jpg" alt="">
        <div id="title">
            <div id="profile">
                <span>公司简介</span>
                <span>COMPANY PROFILE</span>
                <el-row id="line">
                    <el-col :span="2"><div class="red">·</div></el-col>
                    <el-col :span="1"><div class="yellow">·</div></el-col>
                    <el-col :span="21"><div class="black">·</div></el-col>
                </el-row>
            </div>
            <div id="profile2">
                <span>宁夏宝丰能源集团股份有限公司简介</span>
            </div>
            <img src="./assets/gy_001.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name: 'Profile'
}
</script>
<style scoped>
div{
    padding: 0
}
div>img{
    width: 100%
}
.red,.yellow,.black{
    font-size: 0.01%;
    height: 5px;
}
.red{
    background: brown;
    color: brown;
}
.yellow{
    background: rgb(219, 141, 39);
    color: rgb(219, 141, 39);
}
.black{
    background:  rgb(46, 33, 33);
    color: rgb(46, 33, 33);
}
#line {
    height: 0.1px;
    font-size: 0.1px;
}
#title{
    position: relative;
    margin: 0 auto;
    padding: 28px 15px;
    width: 90%;
    text-align: left;
    top: -60px;
    background: white;
}
#profile>span:nth-child(1){
    color: brown;
    font-size: 2em;
    position: relative;
    left: 0;
}
#profile2{
    font-size: 1.3em;
}
.el-row{
    margin-top: 9px;
    margin-bottom: 33px;
}
#title>img{
    margin: 0;
}
</style>

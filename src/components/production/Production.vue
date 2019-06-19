<template>
    <div>
        <img src="./assets/lx_02.jpg" alt="" width="100%">
                <Aside id="aside"></Aside>
                <div id="main">
                    <div id="title">循环经济产业链</div>
                        <el-row id="line">
                            <el-col :span="2"><div class="red">·</div></el-col>
                            <el-col :span="1"><div class="yellow">·</div></el-col>
                            <el-col :span="21"><div class="black">·</div></el-col>
                        </el-row>
                    <div id="production">
                        <router-view></router-view>
                    </div>
                </div>
        <img src="./assets/lx_06.jpg" alt="" width="100%" style="margin-top:40px">
    </div>
</template>
<script>
import Aside from './Aside'
export default {
    name: 'Production',
    components: {Aside}
}
</script>
<style scoped>
#aside{
    position: relative;
    left: 0%;
    top: 20%;
}
#main{
    /* right: 2%; */
    float: right;
    width: 80%;
}
#production{
    position: relative;
    top: 30px;
    width: 100%;
}
#title{
    font-size: 1.5em;
    text-align: left;
    color: brown;
}
#line{
    height: 0.1px;
    font-size: 0.1em;
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
</style>

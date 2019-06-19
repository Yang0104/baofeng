<template>
    <div id="footer">
        <el-row id="line">
            <el-col :span="14">1</el-col>
            <el-col :span="2">2</el-col>
            <el-col :span="8">3</el-col>
        </el-row>
        <el-row id="info" style="height:30px; font-size:1em">
            <el-col :span="16">
                <el-row>版权所有：宁夏宝丰能源集团股份有限公司 Copyright@ 2017 All Rights Reserved. </el-row>
                <el-row>网站设计制作：杨旭洋 本网站为制作练习用,所用信息由第三方提供</el-row>
            </el-col>
            <el-col :span="8">宁ICP备17000289号</el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'Footer'
}
</script>


<style scoped>
#footer{
    margin: 0px;
    padding: 0;
}
#line{
    margin: 0px;
}
#line>.el-col:nth-child(1){
    background: brown;
    color: brown;
}
#line>.el-col:nth-child(2){
    background: rgb(219, 141, 39);
    color: rgb(219, 141, 39);
}
#line>.el-col:nth-child(3){
    background: rgb(46, 33, 33);
    color: rgb(46, 33, 33);
}
#line {
    height: 2px;
    font-size: 0.1em;
}
#info>.el-col>.el-row{
    text-align: left;
}
</style>

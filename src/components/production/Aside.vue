<template>
    <div id="aside">
        <div id="title">
            主要产品
        </div>
        <el-menu router="true" :default-active="activeIndex" @select="handleSelect">
            <el-menu-item index="ProducStrain">循环经济产业链</el-menu-item>
            <el-menu-item index="MainProduct">主要产品及用途</el-menu-item>
        </el-menu>
    </div>
</template>
<script>
export default {
    name: 'Aside'
}
</script>
<style scoped>
.el-menu{
position: absolute;
top: 50px;
padding: 20px 0 20px 0;
width: 220px;
}
#title{
position: absolute; 
padding:0;
background: rgb(202, 9, 9);
font-size: 2em;
color: white;
width: 220px;
height: 50px;
}
/* #aside{
    position: absolute;
    width: 250px;
    left: 50px;

} */
</style>


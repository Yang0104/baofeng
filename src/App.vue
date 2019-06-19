<template>
    <el-container id="app">
      <el-header>
          <a id="logo" href=""><img src="./assets/logo.jpeg" alt=""></a>
            <el-menu router="true"
                    :default-active="active-index" 
                      class="el-menu-demo" 
                      mode="horizontal" 
                      @select="handleSelect" 
                      background-color="">
              <el-menu-item index="home">首页</el-menu-item>
              <el-menu-item index="profile">公司简介</el-menu-item>
              <el-menu-item index="production">主要产品</el-menu-item>
              <el-menu-item index="4">投资者关系</el-menu-item>
              <el-menu-item index="5">联系我们</el-menu-item>
            </el-menu>
            <el-input v-model="input" placeholder="搜索" size="mini" suffix-icon="icon-search"></el-input>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
</template>

<script>
import Footer from './components/footer/Footer'
export default {
  name: 'App',
  components:{
    Footer
  },
  data(){
    return{
      input: ''
    }
  }
}
</script>

<style scoped>
/* body{
  margin: 8px,5px;
} */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 10px; */
}
a>img{
  width: 150px;
  height: 60px;
}
#logo{
  position: absolute;
  left: 10px;
}
.el-header{
  margin: 0;
  height: 60px;
}
.el-footer{

}
.el-menu{
  position: absolute;
  left: 20%;
}
.el-main{
  padding: 0;
  margin: 0;
}
.el-input{
  position: absolute;
  /* height: 1px; */
  width: 150px;
  right: 5%;
  margin-top: 15px;
  border-radius:10px;
}
.el-footer{
  padding: 0;
}
</style>
 
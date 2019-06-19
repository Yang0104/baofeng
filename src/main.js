// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/icon/iconfont.css'
// import './common/fonts/my-icon.css'
import {Button,Input,Container,Header,Footer,Main,Menu,MenuItem,Carousel,CarouselItem,Row,Col,Link} from 'element-ui'

Vue.use(Button)
Vue.use(Container)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Header)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Link)
Vue.use(Input)
// 
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

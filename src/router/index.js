import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Profile from '@/components/profile/Profile'
import Production from '@/components/production/Production'
import ProducStrain from '@/components/production/children/ProducStrain'
import MainProduct from '@/components/production/children/MainProduct'
// import HelloWorld from '@/components/HelloWorld's

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '/',
      redirect: 'Home'
    },
     {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/production',
      name: 'Production',
      component: Production,
      redirect: '/ProducStrain',
      children:[
      {
        path: '/ProducStrain',
        name: 'ProducStrain',
        component: ProducStrain
      },
      {
        path: '/MainProduct',
        name: '',
        component: MainProduct 
      },
    ],
    
    },
  ]
})

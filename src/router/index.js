import Vue from 'vue';
import Router from 'vue-router';
// import goods from '@/components/goods/goods';
// import ratings from '@/components/ratings/ratings';
// import seller from '@/components/seller/seller';

Vue.use(Router);

const goods = require('@/components/goods/goods');
const ratings = require('@/components/ratings/ratings');
const seller = require('@/components/seller/seller');

// export default new Router({
const routes = [
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/ratings',
      component: ratings
    },
    {
      path: '/seller',
      component: seller
    },
    {
      path: '/',
      redirect: '/goods'
    }
  ];
// });

export default new Router({
  mode: 'history', // 谢欢路径模式，变成history模式，不然路径为/#/home
  linkActiveClass: 'active',
  routes
});
console.log(Router);

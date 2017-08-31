// 生成的模板默认配置：注释双斜杠后空格，js代码结尾带分号,功能字符后空格
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';
import router from './router';

import './commen/sass/index.scss';

Vue.use(VueResource);

Vue.config.productionTip = false;

console.log(router);
/* eslint-disable no-new  */
// 默认配置结尾不能带分号，此注释可以修改默认配置
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

// router.go('/goods');
// 2.0版本中router.go 已经被用来作为 后退/前进导航，router.push 用来导向特殊页面
// 或者在模板中的路由便签添加 to=""
// router.push('/goods');

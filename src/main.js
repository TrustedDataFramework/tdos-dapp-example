// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill';
import 'ie-placeholder'
import toastRegistry from './components/toast/index'


Vue.config.productionTip = false


//定义全局临时变量
var momentObj = {};
Vue.prototype.getMainData = function () {
	return momentObj
}
Vue.prototype.changeMainData = function (key,val) {
	momentObj[key] = val
}
//Use
// that.changeMainData("name","gangYong")
// that.changeMainData("old","88")
// alert(JSON.stringify(that.getMainData()));


Vue.use(toastRegistry)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

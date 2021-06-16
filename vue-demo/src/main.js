// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import '../public-path';
import VueRouter from 'vue-router';
import routes from './router';

Vue.config.productionTip = false

/* eslint-disable no-new */
let router = null;
let instance = null;
function render(props = {}) {
  const { container } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/app-vue/' : '/',
    mode: 'history',
    // routes,
  });

  instance = new Vue({
    router,
    // store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('>>>>>Vue子应用加载', props);
  render(props);
}
export async function unmount() {
  console.log('>>>>>Vue子应用卸载')
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

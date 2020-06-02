import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
    //引入重置样式
import "assets/styleshennts/reset.css"

// 盒子样式
import "styleless/homeindex.less"

//

//滑动监听
import vuescroll from 'vue-scroll'
Vue.use(vuescroll)
import NutUI from '@nutui/nutui'
import '@nutui/nutui/dist/nutui.css'
Vue.use(NutUI)


import VueQuillEditor from "vue-quill-editor"
import "quill/dist/quill.core.css"
import "quill/dist/quill.snow.css"
import "quill/dist/quill.bubble.css"
Vue.use(VueQuillEditor)

import ServerMixin from './mixin/serverMixin'
Vue.use(ServerMixin)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
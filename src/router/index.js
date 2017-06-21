import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home/home.vue'
import TopicDetail from '../components/Detail/topicDetail.vue'
import AuthorDetail from '../components/User/authorDetail.vue'
import Messages from '../components/User/messages.vue'
import Collections from '../components/User/collections.vue'
import Edit from '../components/Public/edit.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {name: 'default', path: '/', redirect: '/home'},
    {name: 'home', path: '/home/:id?', component: Home},
    {name: 'topicDetail', path: '/topic/topicDetail/:id?', component: TopicDetail},
    {name: 'user', path: '/user/:name?', component: AuthorDetail},
    {name: 'userMessages', path: '/user/:name?/messages', component: Messages},
    {name: 'collections', path: '/user/:name?/collections', component: Collections},
    {name: 'edit', path: '/topic/edit/:id?', component: Edit}
  ]
})

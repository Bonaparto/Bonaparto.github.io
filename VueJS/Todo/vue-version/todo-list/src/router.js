import Vue from 'vue'
import Router from 'vue-router'
import Todo from './components/Todo.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Todos',
            component: Todo
        },
        {
            path: '/about/:name',
            name: 'about',
            component: About
        }
    ]
})
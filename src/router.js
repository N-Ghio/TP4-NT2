import Vue from "vue";
import VueRouter from "vue-router";

import Formulario from './components/Formulario.vue'
import UsuariosAxios from './components/UsuariosAxios.vue'
import UsuariosFetch from './components/UsuariosFetch.vue'
import UsuariosXHR from './components/UsuariosXHR.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/formulario'},
        { path: '/formulario', component: Formulario },
        { path: '/axios', component: UsuariosAxios },
        { path: '/fetch', component: UsuariosFetch },
        { path: '/xhr', component: UsuariosXHR },
    ]
})

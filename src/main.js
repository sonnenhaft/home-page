import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from './MainLayout.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

const VladdsPage = {
  template: `<main-layout>
   <h1>Vladd's</h1>
   <p>      
      Vladd's is a home place for <br/>
      one particular engineer.
    </p>
 </main-layout>`,
  components: { MainLayout }
};

const MyProjectsPage = {
  template: `<main-layout>
 <h1>My projects</h1>
 <p>Here I want to leave my projects</p>
 </main-layout>`,
  components: { MainLayout }
};

const AboutPage = {
  template: `<main-layout>
 <h1>About page</h1>
 <p>Here should be smth about me</p>
 </main-layout>`,
  components: { MainLayout }
};

const NotFound = {
  template: `<main-layout>
 <h1>Not found</h1>
 <p>Page that you wanted to access is not found</p>
 </main-layout>`,
  components: { MainLayout }
};

new Vue({
  el: '#vladds',
  router: new VueRouter({
    routes: [
      {path: '', name: 'VladdsPage', component: VladdsPage},
      {path: '/', name: 'VladdsPage-with-slash', component: VladdsPage},

      {path: '/about', name: 'AboutPage', component: AboutPage},
      {path: '/my-projects', name: 'MyProjectsPage', component: MyProjectsPage},

      { path: "*", component: NotFound },
    ]
  }),
  render (h) { return h({template: `<router-view></router-view>`}) }
})

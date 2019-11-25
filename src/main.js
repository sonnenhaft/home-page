import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from './MainLayout/MainLayout.vue'
import AlternativeLayout from './AlternativeLayout.vue'
import TodosPage from './TodosPage/TodosPage.vue'
import ThreeJsPage from './ThreeJsPage/ThreeJsPage.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const RootPage = {
  template: `<MainLayout>
<h1>TADA!!</h1>
<p>      
  My, yet another try, <br/>
  for home page ;-)
</p>
</MainLayout>`,
  components: { MainLayout },
};

const GitProjectsPage = {
  template: `<AlternativeLayout>    
    <p>
        You see here my github projects. It is freelance, or incomplete freelance, <br>
        or some demo projects, do not expect quality here, I just packed everything in single place
    </p>
    
    <h4>
        <a href="https://sonnenhaft.github.io/hong-chart/">Hong chart</a>
    </h4>    
    <div style="transform: scale(0.5);transform-origin: top left;margin-bottom: -400px;">
        <iframe width="1050" height="800" src="https://sonnenhaft.github.io/hong-chart/"/>
    </div>
    
    <h4>
        <a href="https://dbs-chart.netlify.com/">DBS chart</a>            
    </h4>
    <div style="transform: scale(0.5);transform-origin: top left;margin-bottom: -400px;">
        <iframe width="1050" height="800" src="https://dbs-chart.netlify.com/"></iframe>
    </div>    
  </AlternativeLayout>`,
  components: { AlternativeLayout },
};

const AboutPage = {
  template: `<MainLayout><h1>About page</h1><p>Here should be smth about me</p></MainLayout>`,
  components: { MainLayout },
};

const TodosWrappedPage = {
  template: `<AlternativeLayout><TodosPage/></AlternativeLayout>`,
  components: { AlternativeLayout, TodosPage },
};

const ThreeJsPageWrapped = {
  template: `<AlternativeLayout><ThreeJsPage/></AlternativeLayout>`,
  components: { AlternativeLayout, ThreeJsPage },
};

const pageNotFound404 = {
  components: { MainLayout },
  template: `<main-layout><h1>Not found</h1><p>Page not found</p></main-layout>`,
};

new Vue({
  el: '#vue-landing',
  router: new VueRouter({
    routes: [
      { path: '', component: RootPage },

      { path: '/',  component: RootPage },
      { path: '/todos',  component: TodosWrappedPage },
      { path: '/about',  component: AboutPage },
      { path: '/git-projects', component: GitProjectsPage },
      { path: '/globe', component: ThreeJsPageWrapped },

      { path: "*", component: pageNotFound404 },
    ],
  }),
  render(h) { return h({ template: `<router-view/>` }) },
})

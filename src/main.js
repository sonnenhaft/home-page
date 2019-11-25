import Vue from 'vue'
import VueRouter from 'vue-router'
import AlternativeLayout from './AlternativeLayout.vue'
import MainLayout from './MainLayout'
import { setLinks } from './MainMenu.vue'
import ThreeJsPage from './ThreeJsPage'
import TodosPage from './TodosPage'

import PrettyCheckboxVue from 'pretty-checkbox-vue';
import 'pretty-checkbox/dist/pretty-checkbox.css';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClone, faTrashAlt, faArrowRight, faArrowLeft, faArrowCircleUp, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import rate from 'vue-rate';

library.add(faClone, faTrashAlt, faArrowRight, faArrowLeft, faArrowCircleUp, faTimesCircle);

Vue.use(rate)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(PrettyCheckboxVue)
Vue.use(VueRouter)
Vue.config.productionTip = false

const RootPage = {
  template: `<MainLayout><h1>TADA!!</h1><p>My, yet another try, <br/>for home page ;-)</p></MainLayout>`,
  components: { MainLayout }
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
  components: { AlternativeLayout }
};

const pageNotFound404 = {
  template: `<MainLayout><h1>Not found</h1><p>Page not found</p></MainLayout>`,
  components: { MainLayout }
};

const altLayout = obj => ({
  template: `<AlternativeLayout><${ Object.keys(obj)[0] }/></AlternativeLayout>`,
  components: { ...obj, AlternativeLayout }
})

const links = [
  { path: '/', text: 'Root', component: RootPage },
  { path: 'git-projects', text: 'Git projects', component: GitProjectsPage },
  { path: 'globe', text: 'ThreeJS', component: altLayout({ ThreeJsPage }) },
  { path: 'todos', text: 'My TODOs', component: altLayout({ TodosPage }) },
  {
    path: 'about', text: 'About',
    component: {
      template: `<MainLayout><h1>About page</h1><p>Here should be smth about me</p></MainLayout>`,
      components: { MainLayout }
    }
  }
]

const [firstLink, ...restLinks] = links;
setLinks([firstLink, { path: 'teams', text: 'My teams (tbd)' }, ...restLinks])

new Vue({
  el: '#vue-landing',
  router: new VueRouter({
    routes: [
      { path: '', component: RootPage },
      ...links.map(({ path, component }) => ({ path: path === '/' ? '/' : `/${ path }`, component })),
      { path: '/todos/:id', text: 'My id', component: altLayout({ TodosPage }) },
      { path: "*", component: pageNotFound404 }
    ]
  }),
  render: h => h({ template: `<router-view/>` })
})

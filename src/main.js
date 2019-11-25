import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowCircleUp, faArrowLeft, faArrowRight, faClone, faLink, faTimesCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import PrettyCheckboxVue from 'pretty-checkbox-vue';
import 'pretty-checkbox/dist/pretty-checkbox.css';
import Vue from 'vue'
import rate from 'vue-rate';
import VueRouter from 'vue-router'
import AlternativeLayout from './AlternativeLayout.vue'
import MainLayout from './MainLayout'
import { setLinks } from './MainMenu.vue'
import PortfolioPage from './PortfolioPage'
import ThreeJsPage from './ThreeJsPage'
import TodosPage from './TodosPage'

library.add(faClone, faTrashAlt, faArrowRight, faArrowLeft, faArrowCircleUp, faTimesCircle, faLink);

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue
  .use(rate)
  .use(PrettyCheckboxVue)
  .use(VueRouter)
Vue.config.productionTip = false

const addLayout = obj => ({
  template: `<AlternativeLayout><${ Object.keys(obj)[0] }/></AlternativeLayout>`,
  components: { ...obj, AlternativeLayout }
})

const about = `<MainLayout><h1>About page</h1><p>Here should be smth about me</p></MainLayout>`;
const notFound = `<MainLayout><h1>Not found</h1><p>Page not found</p></MainLayout>`;

const routes = [
  { path: '/portfolio/all', text: 'Portfolio', component: addLayout({ PortfolioPage }) },
  { path: '/globe', text: 'ThreeJS', component: addLayout({ ThreeJsPage }) },
  { path: '/todos', text: 'TODOs', component: addLayout({ TodosPage }) },
  { path: '/about', text: 'About', component: { template: about, components: { MainLayout } } }
]

const [firstRoute] = routes;
setLinks(routes)

new Vue({
  el: '#vue-landing',
  router: new VueRouter({
    routes: [
      { ...firstRoute, path: '' },
      { ...firstRoute, path: '/' },
      { ...firstRoute, path: '/portfolio/:type' },
      ...routes,
      { path: '/todos/:id', text: 'TODO ID', component: addLayout({ TodosPage }) },
      { path: "*", component: { template: notFound, components: { MainLayout } } }
    ]
  }),
  render: h => h({ template: `<router-view/>` })
})

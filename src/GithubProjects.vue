<template>
    <div>
        <div>
            <p-check color="danger-o" tabindex="-1"
                     v-model="noDescValue"
                     @change="updateHash()">
                Show description
                <i slot="extra" class="icon mdi mdi-close"></i>
            </p-check>
        </div>

        <p v-if="!noDescValue">
            You see here my github projects. It is freelance, or incomplete freelance, <br>
            or some demo projects, do not expect quality here, I just packed everything in single place
        </p>

        <div style="margin: 0 -8px; display: flex;    flex-wrap: wrap;">
            <div v-for="{ name, url, git } in items" :key="name" style="width: 33.3%">
                <h4 v-if="!noDescValue" style="padding: 0 8px">
                    <a :href="url">{{ name }}</a>
                    (<a :href="git">git</a>)
                </h4>

                <div style="transform: scale(0.333);transform-origin: top left;margin-bottom: -400px; width: 300%">
                    <iframe width="100%" height="590" :src="url" />
                </div>
            </div>
        </div>
    </div>
</template>


<script>
  const customUrls = {
    'd3_gaeatan-chart': 'https://sonnenhaft.github.io/d3_gaeatan-chart/?stub',
    'vue_paginatable-table': 'https://sonnenhaft.github.io/vue_paginatable-table/#/?stub',
  };
  
  const items = Object.entries({
    'LuckyDiem': 'luckydiem',
    'RL Kanban': 'rl-kanban',
    'XM-Charts': 'xm-charts',
    'Gl Data Sending': 'd3_gl-data-sensing',
    'Pokedex': 'ng_pokedex_lazy-scroll',
    'Vue Landing': 'vue-landing',        
    'Hong chart': 'd3_hong-chart',
    'Gaeatan Chart': 'd3_gaeatan-chart',    
    'DBS Chart': 'd3_dbs-chart',    
    'Rock paper-scissors': 'ng2_rock-paper-scissors_simple',
    'EPAM Hackaton Training Portal': 'epam_hackaton_training-portal',    
    'Vue Paginatable table': 'vue_paginatable-table',
    'React video-carousel': 'react_video-carousel',
    'React tenor-table': 'react_tenor-table',    
    'Webpack starter': 'quick-webpack-bundle-analyzer-test-repo',    
    'd3-ts-charts_poc': 'd3-ts-charts_poc',
    'jQuery Mobile Rss Reader for habrahabr': 'jquery_mobile_rss-reader_for_habrahabr',        
    'Mongolabs API demo': 'ng_mongolabs-free-api_demo-page'
  }).map(([name, value]) => ({
    name,
    url: customUrls[value] || `https://sonnenhaft.github.io/${ value }`,
    git: `https://github.com/sonnenhaft/${ value }`
  }));

  export default {
    name: 'github-projects',
    methods: {
      updateHash() {
        if (this.noDescValue) {
          location.hash += '?no-desc'
        } else {
          location.hash = location.hash.replace('?no-desc', '')
        }
      }
    },
    data() {
      return { items, noDescValue: location.hash.includes('?no-desc')  }
    }
  }
</script>

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
  const items = Object.entries({
    'Vue Landing': 'vue-landing',
    'Pokedex': 'ng_pokedex_lazy-scroll',
    'Vue Paginatable table': 'vue_paginatable-table',
    'EPAM Hackaton Training Portal': 'epam_hackaton_training-portal',
    'Gl Data Sending': 'd3_gl-data-sensing',
    'RL Kanban': 'rl-kanban',
    'React video-carousel': 'react_video-carousel',
    'React tenor-table': 'react_tenor-table',
    'Hong chart': 'd3_hong-chart',
    'Webpack starter': 'quick-webpack-bundle-analyzer-test-repo',
    'DBS Chart': 'd3_dbs-chart',
    'LuckyDiem': 'luckydiem',
    'jQuery Mobile Rss Reader for habrahabr': 'jquery_mobile_rss-reader_for_habrahabr',
    'Gaeatan Chart': 'd3_gaeatan-chart',
    'Rock paper-scissors': 'ng2_rock-paper-scissors_simple',
    'Mongolabs API demo': 'ng_mongolabs-free-api_demo-page'
  }).map(([name, value]) => ({
    name,
    url: `https://sonnenhaft.github.io/${ value }`,
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

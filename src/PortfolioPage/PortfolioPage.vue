<template>
    <div class="portfolio-page">
        <div class="portfolio-page__content">
            <div class="portfolio-page__menu">
                <router-link to="/portfolio/all" tag="a" active-class="active">All</router-link>
                <router-link to="/portfolio/projects" tag="a" active-class="active">Projects</router-link>
                <router-link to="/portfolio/test_tasks" tag="a" active-class="active">Test Tasks</router-link>
                <router-link to="/portfolio/others" tag="a" active-class="active">Others</router-link>
            </div>

            <div class="portfolio-page__projects">
                <div v-for="project in projects" :key="project.name" class="portfolio-page__project"
                     v-show="!$route.params.type || $route.params.type === 'all' || $route.params.type === project.type">
                    <div class="portfolio-page__iframe-wrapper">
                        <div class="portfolio-page__iframe-resizer">
                            <Loader class="portfolio-page__iframe-loader" v-if="!project.loaded" />                            
                            <iframe width="100%" height="100%"
                                        @load="iframeLoaded(project)"
                                        style="border: none; z-index: 1;position: relative"
                                        :src="project.url || `https://sonnenhaft.github.io/${ project.value }`"></iframe>                            
                        </div>
                    </div>

                    <div class="portfolio-page__project-buttons">
                        <a :href="project.url || `https://sonnenhaft.github.io/${ project.value }`" target="_blank">
                            {{ project.name }}
                        </a>

                        <a :href="`https://github.com/sonnenhaft/${ project.value }`" target="_blank">
                            <img width="16px" height="16px" src="./GitHub-logo-120px.png" title="GitHub Account" alt="GitHub">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import projects from './projects.json'
  import Loader from './Loader';

  export default {
    components: { Loader },
    name: 'github-projects',
    data: () => ({ projects }),
    methods: {
      iframeLoaded: function(project) {
        project.loaded = true
        this.$forceUpdate();
      }
    }
  }
</script>

<style src="./PortfolioPage.css"></style>

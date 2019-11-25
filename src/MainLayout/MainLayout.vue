<template>
  <div class="main-layout">
    <div class="content">
      <div class="inner-content">
        <slot/>

        <navigation-menu/>

        <footer>
          <address>
            <a href="mailto:vladimir.sonnenahft@gmail.com">
              vladimir.sonnenhaft@gmail.com
            </a>
          </address>

          <address>
            Singapore, <span>April 2019</span>
          </address>

          designed by

          <a target="_blank" href="https://speckyboy.com/25-beautiful-clean-web-designs/">
            drxlr.com
          </a>
        </footer>
      </div>

      <nav class="floating-nav">
        ☰
      </nav>
    </div>


    <div class="fullscreen-image" ondragstart="return false">
      <img
          src="https://picsum.photos/200/600"
          alt="nice background"
          v-on:load="onImageLoaded"
          v-bind:class="{ imageLoaded }">
    </div>
  </div>
</template>

<script>
  import NavigationMenu from '../NavigationMenu';
  export default {
    name: 'main-layout',
    components: {NavigationMenu},
    data() {
      return {
        imageLoaded: false
      }
    },
    methods: {
      onImageLoaded() {
        this.imageLoaded = true;
      },
    }
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    height: 100%
  }
  html {
    height: 100%
  }
</style>

<style scoped src="./MainLayout.css"></style>

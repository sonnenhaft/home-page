<template>
  <div class="main-layout">
    <div class="content">
      <div class="inner-content">
        <slot/>


        <nav>
          <router-link tag="a" to="teams">
            Teams I worked with
          </router-link>

          <router-link tag="a" to="my-projects">
            Projects I have in git
          </router-link>

          <router-link tag="a" to="about">
            About
          </router-link>
        </nav>

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
      <img src="https://picsum.photos/200/600" alt="My photo">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'main-layout',
    props: { msg: String }
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

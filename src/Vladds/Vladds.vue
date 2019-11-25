<template>
  <div class="vladds">
    <div class="content">
      <div class="inner-content">
        <h1>Vladd's</h1>

        <p>
          Vladd's is a home place for <br/>
          one particular engineer.
        </p>

        <nav>
          <a href="#">Explore Work</a>
          <a href="#">Learn About Us</a>
          <a href="#">Read Our Minds</a>
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


    <div class="fullscreen-image">
      <img src="https://picsum.photos/200/600" alt="My photo">
      <p>background</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
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
<style scoped src="./Vladds.css"></style>

<template>
    <div class="main-layout">
        <div class="content">
            <div class="inner-content">
                <slot />

                <MainMenu class="main-layout__main-menu" />

                <footer>
                    <address>
                        <a href="mailto:vladimir.sonnenahft@gmail.com">
                            vladimir.sonnenhaft@gmail.com
                        </a>
                    </address>

                    <address>Singapore, <span>April 2019</span></address>

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
                    @load="onImageLoaded"
                    :class="{ imageLoaded }">
        </div>
    </div>
</template>

<script>
  import MainMenu from '../MainMenu';

  export default {
    components: { MainMenu },
    data: () => ({ imageLoaded: false }),
    methods: {
      onImageLoaded() {
        this.imageLoaded = true;
      },
    },
  }
</script>

<style src="../global.css"></style>
<style scoped src="./MainLayout.css"></style>

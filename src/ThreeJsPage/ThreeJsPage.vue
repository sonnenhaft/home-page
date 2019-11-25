<template>
    <canvas ref="canvas"></canvas>
</template>

<style scoped>
    canvas {
        background: black;
        width: 100%;
        height: 100%;
    }
</style>

<script>
  import RenderThreeTubeAsync from './RenderThreeTubeAsync';

  export default {
    async mounted() {
      const THREE = await import(/* webpackChunkName: "async-vendors/THREE" */  'three');
      const dat = await import(/* webpackChunkName: "async-vendors/dat.gui" */  'dat.gui');

      this.destroy = RenderThreeTubeAsync(this.$refs.canvas, THREE, dat);
    },

    destroyed() {
      this.destroy();
    },
  }
</script>

<template>
    <div>
        <MainMenu class="alternative-layout__main-menu" />
        <slot />
    </div>
</template>

<script>
  import MainMenu from './MainMenu';

  export default { components: { MainMenu } }
</script>

<style src="./global.css"></style>

<style scoped>
    div {
        height: 100%;
    }
</style>
<style>
    .alternative-layout__main-menu {
        background: black;
        padding: 0 16px;
        align-content: space-between;
        text-align: center;
    }

    .alternative-layout__main-menu > a {
        font-weight: bold;
        padding: 12px 16px;
        display: inline-block;
        height: 100%;
        color: #848484;
        font-size: 14px;
    }

    .alternative-layout__main-menu > a:hover {
        background: #434343;
        color: white;
    }
</style>

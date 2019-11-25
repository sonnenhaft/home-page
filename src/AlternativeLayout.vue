<template>
    <div style="height: 100%">
        <div class="alternative-layout__main-menu">
            <div style="display: flex">
                <!--https://www.myfonts.com/fonts/sideshow/mister-brown/regular-->
                <img src="./projects-in-dribble-font.png" style="height: 24px;margin-right: 20px;">
            </div>

            <MainMenu class="menu" />

            <div>
                <a class="git-link" href="https://github.com/sonnenhaft">
                    <img src="./PortfolioPage/GitHub-logo-120px.png" title="GitHub Account" alt="GitHub">
                </a>
            </div>
        </div>

        <slot />
    </div>
</template>

<script>
  import MainMenu from './MainMenu';

  export default { components: { MainMenu } }
</script>

<style src="./global.css"></style>
<style>
    .alternative-layout__main-menu {
        background: #333333;
        padding: 14px 16px;
        align-content: space-between;
        text-align: center;
        justify-content: space-between;
        display: flex;
    }

    .alternative-layout__main-menu .menu > a {
        font-weight: 600;
        padding: 6px 16px;
        display: inline-block;
        color: #8e9493;
        font-size: 13px;
        text-decoration: none;
        border-radius: 7px;
        margin: 0 2px;
    }

    .git-link img {
        filter: invert(100%);
        width: 24px;
        height: 24px;
    }

    .git-link:hover img {
        filter: invert(80%);
    }

    .alternative-layout__main-menu .menu > a:first-of-type,
    .alternative-layout__main-menu .menu > a:hover {
        background: black;
        font-weight: bold;
        color: white;
    }
</style>

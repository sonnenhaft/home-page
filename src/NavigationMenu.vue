<template>
    <nav>
        <router-link tag="a" to="teams">
            Teams I worked with
        </router-link>

        <router-link tag="a" to="my-projects">
            Projects I have in git
        </router-link>

        <router-link tag="a" to="todos">
            My TODOs implementation
        </router-link>

        <router-link tag="a" to="about">
            About
        </router-link>
    </nav>
</template>

<script>
  export default {name: 'NavigationMenu'}
</script>

<style :scoped>
    nav a {
        text-decoration: none;
        margin-right: 20px;
    }

    nav a:hover {
        text-decoration: underline;
    }

    nav {
        margin-bottom: 60px;
    }

    a {
        text-decoration: underline;
        color: inherit;
        font-weight: bold;
        font-size: 12px;
    }
</style>
<template>
    <nav>
        <router-link v-for="link in links" tag="a" :to="link.path">
            {{link.text}}
        </router-link>
    </nav>
</template>

<script>
  export default {
    data: () => ({
      links: [
        { path: '/', text: 'Root' },
        { path: 'teams', text: 'My teams (tbd)' },
        { path: 'git-projects', text: 'Git projects' },
        { path: 'globe', text: 'ThreeJS' },
        { path: 'todos', text: 'My TODOs' },
      ],
    }),
  }
</script>

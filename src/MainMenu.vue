<template>
    <nav>
        <router-link v-for="{ path, text } in links" :key="path"
                     :to="path" tag="a">
            {{text}}
        </router-link>

        <a href="https://gist.github.com/sonnenhaft/b861c8e76c9b59b1278cd48b1479589e/edit"
           target="_blank">Словарик</a>
    </nav>
</template>


<script>
  let links = [{ path: '/', text: 'error - links not set' }];

  export const setLinks = _links => links = _links;

  export default {
    name: 'main-menu',
    data: () => ({ links })
  }
</script>

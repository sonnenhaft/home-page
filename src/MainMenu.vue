<template>
    <nav>
        <router-link v-for="{ path, text } in links" :key="path"
                     :to="path" tag="a">
            {{text}}
        </router-link>
    </nav>
</template>

<script>
  let links = [{ path: '/', text: 'error - links not set' }];
  export const setLinks = _links => links = _links;

  export default {
    name: 'main-menu',
    data: () => ({ links }),
  }
</script>

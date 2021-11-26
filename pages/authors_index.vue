<script>
  import util from '~/assets/js/util'
  export default {
    async asyncData({ params, $axios }) {
      let authors = await $axios.$get('https://api.typewriter.cloud/arce/bookstore/types/authors')
      authors.forEach(author => util.cmsToObj(author))
      return {
        authors
      }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Authors Information</h3>
     <p>This section presents information about authors</p>
   <ul>
     <li v-for="author of authors" :key="author.slug">
       <NuxtLink :to="{ name: 'authors-slug', params: { slug: author.slug } }">{{author.name}}</NuxtLink>
     </li>
   </ul>
   <FooterView />
   <!--Entidades: battle, personaje, casa, mascota, muertes-->
 </div>
</template>
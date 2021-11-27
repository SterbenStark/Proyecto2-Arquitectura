<script>
  import util from '~/assets/js/util'
  export default {
    async asyncData({ params, $axios }) {
      let characters = await $axios.$get('https://api.typewriter.cloud/milton/proyecto2/types/personaje')
      characters.forEach(character => util.cmsToObj(character))
      return {
        characters
      }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Characters Information</h3>
     <p>This section presents information about of characters in Game Of Thrones</p>
   <ul>
     <li v-for="character of characters" :key="character.slug">
       <NuxtLink :to="{ name: 'characters-slug', params: { slug: character.slug } }">{{character.name}}</NuxtLink>
     </li>
   </ul>
   <FooterView />
   <!--Entidades: battle, personaje, casa, mascota, muertes o reyes-->
 </div>
</template>
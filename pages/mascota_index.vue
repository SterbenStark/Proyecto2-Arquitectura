<script>
  import util from '~/assets/js/util'
  export default {
    async asyncData({ params, $axios }) {
      let animals = await $axios.$get('https://api.typewriter.cloud/milton/proyecto2/types/mascota')
      animals.forEach(animal => util.cmsToObj(animal))
      return {
        animals
      }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Animals Information</h3>
     <p>This section presents information about of animals in Game Of Thrones</p>
   <ul>
     <li v-for="animal of animals" :key="animal.slug">
       <NuxtLink :to="{ name: 'animals-slug', params: { slug: animal.slug } }">{{animal.name}}</NuxtLink>
     </li>
   </ul>
   <FooterView />
   <!--Entidades: animal, personaje, casa, mascota, muertes o reyes-->
 </div>
</template>
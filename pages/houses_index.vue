<script>
  import util from '~/assets/js/util'
  export default {
    async asyncData({ params, $axios }) {
      let houses = await $axios.$get('https://api.typewriter.cloud/milton/proyecto2/types/casa')
      houses.forEach(house => util.cmsToObj(house))
      return {
        houses
      }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Houses Information</h3>
     <p>This section presents information about of Houses in Game Of Thrones</p>
   <ul>
     <li v-for="house of houses" :key="house.slug">
       <NuxtLink :to="{ name: 'houses-slug', params: { slug: house.slug } }">{{house.name}}</NuxtLink>
     </li>
   </ul>
   <FooterView />
   <!--Entidades: battle, personaje, casa, mascota, muertes o reyes-->
 </div>
</template>
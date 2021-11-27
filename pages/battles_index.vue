<script>
  import util from '~/assets/js/util'
  export default {
    async asyncData({ params, $axios }) {
      let battles = await $axios.$get('https://api.typewriter.cloud/milton/proyecto2/types/battle')
      battles.forEach(battle => util.cmsToObj(battle))
      return {
        battles
      }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Battles Information</h3>
     <p>This section presents information about of battles in Game Of Thrones</p>
   <ul>
     <li v-for="battle of battles" :key="battle.slug">
       <NuxtLink :to="{ name: 'battles-slug', params: { slug: battle.slug } }">{{battle.name}}</NuxtLink>
     </li>
   </ul>
   <FooterView />
   <!--Entidades: battle, personaje, casa, mascota, muertes o reyes-->
 </div>
</template>
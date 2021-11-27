<script>
  import util from '~/assets/js/util'
  export default {
    async asyncData({ params, $axios }) {
      const cmsUrl = 'https://api.typewriter.cloud/milton/proyecto2/types'
      let personaje = await $axios.$get(cmsUrl+'/personaje/'+params.slug)
      personaje = util.cmsToObj(personaje)
      let casa = await $axios.$get(cmsUrl+'/casa/'+personaje.casaid)
      casa = util.cmsToObj(casa)
      return { cmsUrl, personaje, casa}
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <div class="three columns">
       <img class="u-max-full-width" :src="personaje.personajeimagen">
     </div>
     <div class="six columns">
       <h4>{{personaje.name}}</h4><br>
          House Which Belongs: <NuxtLink :to="'/houses/'+personaje.casaid">{{casa.name}}.</NuxtLink><br><br>
	   <span v-html="personaje.descripcion"></span>
	 </div>
	 <div class="two columns"></div>
   </div>
   <FooterView />
 </div>
</template>
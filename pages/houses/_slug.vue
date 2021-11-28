<script>
  import util from '~/assets/js/util'
  export default {
    async asyncData({ params, $axios }) {
      const cmsUrl = 'https://api.typewriter.cloud/milton/proyecto2/types'
      let casa = await $axios.$get(cmsUrl+'/casa/'+params.slug)
      casa = util.cmsToObj(casa)
      let mascota = await $axios.$get(cmsUrl+'/mascota/'+casa.mascotaid)
      mascota = util.cmsToObj(mascota)

      return { cmsUrl, casa, mascota }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <div class="three columns">
       <img class="u-max-full-width" :src="casa.casaimagen">
     </div>
     <div class="six columns">
       <h4>{{casa.name}}</h4><br>
	      Lema of House: {{casa.lema}} <br>
          Animal of House: <NuxtLink :to="'/animals/'+casa.mascotaid">{{mascota.name}}</NuxtLink><br>
          City of House: {{casa.ciudad}} <br><br>
	   <span v-html="casa.descripcion"></span>
	 </div>
	 <div class="two columns"></div>
   </div>
   <FooterView />
 </div>
</template>
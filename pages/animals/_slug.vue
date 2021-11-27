<script>
  import util from '~/assets/js/util'
  export default {
    async asyncData({ params, $axios }) {
      const cmsUrl = 'https://api.typewriter.cloud/milton/proyecto2/types'
      let animal = await $axios.$get(cmsUrl+'/mascota/'+params.slug)
      animal = util.cmsToObj(animal)

      return { cmsUrl, animal }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <div class="three columns">
       <img class="u-max-full-width" :src="animal.mascotaimagen">
     </div>
     <div class="six columns">
       <h4>{{animal.name}}</h4><br>
	      Species: {{animal.especie}} <br><br>
	   <span v-html="animal.caracteristica"></span>
	 </div>
	 <div class="two columns"></div>
   </div>
   <FooterView />
 </div>
</template>
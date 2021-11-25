<script>
  import util from '~/assets/js/util'
  export default {
    async asyncData({ params, $axios }) {
      let publisher = await $axios.$get('https://api.typewriter.cloud/arce/bookstore/types/publishers/publisher_1')
      publisher = util.cmsToObj(publisher)
      return { publisher }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <div class="three columns">
       <img class="u-max-full-width" :src="publisher.publisherimage">
     </div>
     <div class="six columns">
       <h4>{{publisher.name}}</h4><br>
	      Country: {{publisher.country}} <br>
          Founded: {{publisher.founded}} <br>
          Genere: {{publisher.genere}} <br>
	   <span v-html="publisher.content"></span>
	 </div>
	 <div class="two columns"></div>
   </div>
   <FooterView />
 </div>
</template>
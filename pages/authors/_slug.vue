<script>
  import util from '~/assets/js/util'
  export default {
    async asyncData({ params, $axios }) {
      let author = await $axios.$get('https://api.typewriter.cloud/arce/bookstore/types/authors/author_1')
      author = util.cmsToObj(author)
      return { author }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <div class="three columns">
       <img class="u-max-full-width" :src="author.authorimage">
     </div>
     <div class="six columns">
       <h4>{{author.name}}</h4><br>
	      Nationality: {{author.nationality}} <br>
          Birth Year: {{author.birth_year}} <br>
	   <span v-html="author.content"></span>
	 </div>
	 <div class="two columns"></div>
   </div>
   <FooterView />
 </div>
</template>
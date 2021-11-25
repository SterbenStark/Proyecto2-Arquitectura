<script>
  import util from '~/assets/js/util'
  export default {
    async asyncData({ params, $axios }) {
      const cmsUrl = 'https://api.typewriter.cloud/arce/bookstore/types'
      let book = await $axios.$get(cmsUrl+'/book/'+params.slug)
      book = util.cmsToObj(book)
      let author = await $axios.$get(cmsUrl+'/authors/'+book.authorid)
      author = util.cmsToObj(author)
      let publisher = await $axios.$get(cmsUrl+'/publishers/'+book.publisherid)
      publisher = util.cmsToObj(publisher)
      return { cmsUrl, book, author, publisher }
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
       <h4>{{author.name}}</h4>
	   Nationality: {{author.nationality}}; Born: {{author.birth_year}}
	   Fields: {{author.fields}}<br><br> 
	   <!--<b>Biography</b><br>
	   <span v-html="author.content"></span>-->
	 </div>
	 <div class="two columns"></div>
   </div>
   <FooterView />
 </div>
</template>
<script>
  import util from '~/assets/js/util'
  export default {
    async asyncData({ params, $axios }) {
      const cmsUrl = 'https://api.typewriter.cloud/arce/bookstore/types'
      let publisher = await $axios.$get(cmsUrl+'/publishers/'+params.slug)
      publisher = util.cmsToObj(publisher)
      let book = await $axios.$get(cmsUrl+'/book/'+publisher.publisherid)
      book = util.cmsToObj(book)
      return { cmsUrl, book, author, publisher }
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
       <h4>{{publisher.name}}</h4>
	   Country: {{publisher.country}}; Founded: {{publisher.founded}}
	   Genere: {{publisher.genere}}<br><br> 
	 </div>
	 <div class="two columns"></div>
	   <h5>Books</h5>
	   <ul>
	     <li v-for="book of books" :key="book.slug">
	       <NuxtLink :to="{ name: 'books-slug', params: { slug: book.slug } }">{{book.title}}</NuxtLink>
	     </li>
	   </ul>
   </div>
   <FooterView />
 </div>
</template>
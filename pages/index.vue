<template>
 <div class="container">
   <HeaderView />
   <h2 style="margin-top: 15px">Game Of Thrones</h2>
	  <p>This website offers information about of features and detailed data about the series.
		 With entities like: Houses, Characters, Battles, Animals and Deaths.
	  </p>
    <ul>
	  <li> <NuxtLink to="/houses_index">Houses information</NuxtLink></li>
	  <li> <NuxtLink to="/characters_index">Characters information</NuxtLink></li>
	  <li> <NuxtLink to="/battles_index">Battles information</NuxtLink></li>
	  <li> <NuxtLink to="/mascota_index">Animals information</NuxtLink></li>
	  <li> <NuxtLink to="/deaths_index">Deaths information</NuxtLink></li>
	</ul>
   <FooterView />
 </div>
</template>
<script>
  import util from '~/assets/js/util'
  export default {
    async asyncData({ params, $axios }) {
      const cmsUrl = 'https://api.typewriter.cloud/milton/proyecto2/types'
      let battle = await $axios.$get(cmsUrl+'/battle/'+params.slug)
      battle = util.cmsToObj(battle)
      let houseAtt = await $axios.$get(cmsUrl+'/casa/'+battle.houseattackid)
      houseAtt = util.cmsToObj(houseAtt)
      let houseDef = await $axios.$get(cmsUrl+'/casa/'+battle.housedefenderid)
      houseDef = util.cmsToObj(houseDef)
      return { cmsUrl, battle, houseAtt, houseDef}
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <div class="three columns">
       <!--<img class="u-max-full-width" :src="battle.name">-->
     </div>
     <div class="six columns">
       <h4>{{battle.name}}</h4><br>
	      Number of Battle: {{battle.battle_number}}, Year of Battle: {{battle.year}}. <br>
          Attacker King: {{battle.attacker_king}}. <br>
          Defender King: {{battle.defender_king}}.<br>
          House Attack: <NuxtLink :to="'/houses/'+battle.houseattackid">{{houseAtt.name}}.</NuxtLink><br>
          House Defender: <NuxtLink :to="'/houses/'+battle.housedefenderid">{{houseDef.name}}.</NuxtLink><br>
          Attacker Outcome: {{battle.attacker_outcome}}. <br>
          Battle Type: {{battle.battle_type}}. <br>
          Location of Battle: {{battle.location}}. <br>
          Region of Battle: {{battle.region}}. <br><br>
	   <span v-html="battle.note"></span>
	 </div>
	 <div class="two columns"></div>
   </div>
   <FooterView />
 </div>
</template>
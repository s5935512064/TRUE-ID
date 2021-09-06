<template>
  <div class="q-pa-xl">
    <div class="row">
      <div class="col-sm-9" style="max-width: 700px">
        <strong>สร้าง CAMPAIGN</strong>
        <div class="row">
          <div class="col-8 col-sm-6">
              <q-input outlined v-model="text1" placeholder="Campaign Name or Prize" > 
                  <template v-slot:prepend>
                   <q-icon name="search" />
                  </template>
           </q-input>           
           </div>
           <div class="col-4 col-sm-6">
           <q-input v-model="date1" filled type="date" hint="" />
           </div>
           </div>
           <div class="col-4 col-sm-6"> 
           </div>

           <!--
         <div class="row reverse">   
      <div class="col">
        <strong>Perios</strong>
      </div>
      <div class="col">
       <strong>Prize</strong>
      </div>
      <div class="col" >
        <strong>Campaign Name</strong>
      </div>
    </div>
-->

    <!--
     <q-btn flat @click="drawerRight = !drawerRight" round dense icon="save" />
  -->

        <CampaignDrawer /> 
      

      <CampaignTable /> 
   

      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import CampaignTable from './CampaignTable.vue'
import CampaignDrawer from './CampaignDrawer.vue'

export default {
  components:{
    CampaignTable,
    CampaignDrawer
  },
  setup () {
    
    return {
       
      alert: ref(false),
      confirm: ref(false),
      prompt: ref(false),
      model1: ref(),
      model2: ref(),
      address: ref(''),
      date1: ref('10/11/2564'),
      date2: ref(''),
      columns:ref(''),
      rows:ref(''),
      text1: ref(''),
      text2: ref(''),
      text3: ref(''),
      text4: ref(''),
      ph: ref(''),
      dense: ref(false),
      drawerRight: ref(false)

    }
  }
}
</script>


<template>
  <div class="q-pa-xl">
    <div class="row">
      <div class="col-sm-9" style="max-width: 700px">
        <strong>รางวัล</strong>
             
        <div class="row">
          <div class="col-8 col-sm-6">
              <q-input outlined v-model="text1" placeholder="ชื่อรางวัล/รายละเอียด" > 
                  <template v-slot:prepend>
                   <q-icon name="search" />
                  </template>
           </q-input>           
           </div>    
           </div>
           <div class="col-4 col-sm-6"> 
           </div>
      <CoinDrawer/>
      </div>
    </div>
     
  </div>
</template>

<script>
import { ref } from 'vue'
import CoinDrawer from './PrizeDrawer.vue'

export default {
  components:{
    CoinDrawer
  },
  setup () {
     function linkClick (e, go) {
      e.preventDefault() // we choose when we navigate

      // console.log('triggering navigation in 2s')
      setTimeout(() => {
        // console.log('navigating as promised 2s ago')
        go()
      }, 2000)
    }
    
    return {
      linkClick,
      alert: ref(false),
      confirm: ref(false),
      prompt: ref(false),
      model1: ref(),
      model2: ref(),
      address: ref(''),
      date1: ref(''),
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


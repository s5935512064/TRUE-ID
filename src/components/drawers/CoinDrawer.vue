<template>
     <div class="q-pa-xl">
      <q-drawer
        overlay
        side="right"
        v-model="drawerRight"
        show-if-above
        bordered
        :width="500"
        :breakpoint="600"
        class="bg-grey-3">
        <q-scroll-area class="fit"> 
        <q-toolbar >
         <strong>สร้างสูตรผสม COIN</strong>

        <q-space />
                    <q-btn flat @click="drawerRight = !drawerRight" box dense icon="close" />
        </q-toolbar>

    <div class="q-pa-md">
        <strong>ชื่อสูตร *</strong>
         <div class="q-pa-md">
        <q-input outlined v-model="text2" placeholder="Formula Name" />
        </div>
        
         <strong>ของรางวัล *</strong>
          <div class="q-pa-md">
        <q-input outlined v-model="text3" label="Voucher" />
        </div> 

<div class="q-pa-md">
  <div class="row">
      <div class="col">
        BLACK 20
      </div>
      <div class="col">
        RED 20
      </div>
       <div class="col">
        BLUE 20
      </div>
    </div>
    </div>
<div class="q-pa-md">
    <div class="row">
      <div class="col">
        GREEN 20
      </div>
      <div class="col">
        WHITE 20
      </div>
     </div>
    </div>
    </div>
    

          
    <div class="row justify-around">
      <div class="col-4">
        
        <q-btn icon ="close" class="bg-gray-3 text-black" @click="drawerRight = !drawerRight" box dense label="ยกเลิก" />
      </div>
      <div class="col-4">
       <q-btn color="primary" label="บันทึก" />
      </div>
    </div>


 </q-scroll-area>
  </q-drawer>


     </div>
</template>

<script>
import { ref } from 'vue'

export default{

    name:'CoinDrawer',

    setup(){
        return{
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
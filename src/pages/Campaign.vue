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
     <q-btn flat @click="drawerRight = !drawerRight" round dense icon="save" />

         <q-drawer
         overlay
        side="right"
        v-model="drawerRight"
        show-if-above
        bordered
        :width="500"
        :breakpoint="600"
        class="bg-grey-3"
      >
        <q-scroll-area class="fit">
<q-toolbar >
         <strong>สร้าง CAMPAIGN</strong>
        <q-space />
    
          <q-btn flat @click="drawerRight = !drawerRight" box dense icon="close" />
        </q-toolbar>

     
      
      <div class="q-pa-md">
        <strong>ชื่อ Campaign *</strong>
         <div class="q-pa-md">
        <q-input outlined v-model="text2" label="Campaign" />
        </div>
        
         <strong>ของรางวัล *</strong>
          <div class="q-pa-md">
        <q-input outlined v-model="text2" label="Voucher" />
        </div>
         <div class="row">
      <div class="col">
      <strong>จำนวนของรางวัล *</strong>
      <div class="q-pa-md">
    <q-input
      v-model.number="model"
      label="กรุณาระบุตัวเลข"
      type="number"
      filled
      style="max-width: 300px"/>  
  </div>
  
      </div>
      <div class="col">
      <strong>ระยะเวลา *</strong>
      <div class="q-pa-md">
          <q-input v-model="date" filled type="date"  style="max-width: 200px" />
      </div>
    </div>
    </div>
 
     <div class="row">
      <div class="col">
       <strong>มังกร *</strong>
        <div class="q-pa-md">
           <q-input outlined v-model="text4" label="" style="max-width: " />
      </div>
      </div>
      <div class="col">
         <strong>ความหน่วงในการออกของมังกร *</strong>
          <div class="q-pa-md">
             <q-input
      v-model.number="model2"
       label="กรุณาระบุตัวเลข"
      type="number"
      filled
      style="max-width: 350px" />
   
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

      <CampaignTable />

      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import CampaignTable from '/src/components/table/CampaignTable.vue'

export default {
  components:{
    CampaignTable
  },
  setup () {
    
    return {
      
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


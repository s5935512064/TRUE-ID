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
        <q-input outlined v-model="text3" label="Voucher" />
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
          <q-select
        placeholder=""
        filled
        v-model="modelAdd"
        use-input
        use-chips
        multiple
        hide-dropdown-icon
        input-debounce="0"
        new-value-mode="add"
        style="width: 200px"
      />
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

    </div>
</template>

<script>
import { ref } from 'vue'

export default{

    name:'CampaignDrawer',
    setup(){

        return{
     modelAdd: ref(null),
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
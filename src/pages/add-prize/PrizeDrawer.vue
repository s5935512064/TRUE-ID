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
         <strong>สร้างของรางวัล</strong>

        <q-space />
                    <q-btn flat @click="drawerRight = !drawerRight" box dense icon="close" />
        </q-toolbar>

    <div class="q-pa-md">
        <strong>รูปของรางวัล *</strong>
         <div class="q-pa-md">
       <q-uploader
      url="http://localhost:4444/upload"
      icon="X-Custom-Timestamp"
    
      style="max-width: 150px"
    />
        </div>
        
         <strong>ชื่อของรางวัล *</strong>
          <div class="q-pa-md">
        <q-input outlined v-model="text3" label="Voucher" />
        </div>
        
        <strong>รายละเอียด *</strong>
    <div class="q-pa-md">
    <q-input
        v-model="textareaModel"
        filled
        clearable
        type="textarea"
        color="red-12"
        label=""
        hint="" />
       
     
   
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

    name:'PrizeDrawer',
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
<template>

   <div class="q-pa-xl">
    <q-drawer
        overlay
        side="right"
        v-model="drawerRight"
        show-if-above
        bordered
        :width="600"
        :breakpoint="600"
        class="bg-grey-1">

      <div class="q-pa-md">
        <q-layout container style="width:auto; height:870px;" >
        
            <q-toolbar>
                <q-toolbar-title > 
                    <span class="text-h6 text-weight-bold">สร้างของรางวัล</span>   
                </q-toolbar-title>
                    <q-btn flat @click="drawerRight = !drawerRight" box dense icon="close" />
            </q-toolbar>    
            <q-separator />   
                  
         <div class="q-pa-md">

  <span ><strong >รูปของรางวัล *</strong></span>
    <q-card-section class="text-left">
    
    <q-btn 
       no-caps
       icon="add "
       style="border: dashed 2px #C2C2C2; height:150px; width:130px;  "
       flat :ripple="false"
       label="Upload jpeg.jpg.png"
       >
        </q-btn>
    </q-card-section>
    </div>
        
    <strong>ชื่อของรางวัล *</strong>
          <div class="q-pa-md">
        <q-input outlined v-model="text3" label="Voucher" />
        </div>
        
        <strong>รายละเอียด *</strong>
    <div class="q-pa-md">
    <q-input class="bg-grey-0 "
        v-model="textareaModel"
        filled
        clearable
        type="textarea"
        />
        
    </div>
      <q-footer bordered class="bg-grey-1 text-primary">
        <q-tabs no-caps active-color="primary" indicator-color="transparent" class="text-grey" v-model="tab">
          <q-btn icon ="close" class="bg-gray-1 text-black" @click="drawerRight = !drawerRight" box dense label="ยกเลิก" />
          <q-space/>
           <q-btn color="primary" label="บันทึก" />
        </q-tabs>
      </q-footer>

      
    </q-layout>   
  </div>


 
  </q-drawer>

  
  </div>

  
</template>

<script>
import { ref } from 'vue'



export default{


    name:'PrizeDrawer',
    setup(){

        return{

             drawerRight: ref(false),
             textareaModel: ref(''),
             text3: ref('')


        }

    }
}


</script>
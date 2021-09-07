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
                    <span class="text-h6 text-weight-bold">สร้าง CAMPAIGN</span>   
                </q-toolbar-title>
                    <q-btn flat @click="drawerRight = !drawerRight" box dense icon="close" />
            </q-toolbar>    
            <q-separator />   
                  
          
            <q-card-section class="text-left">
                <div class="q-pb-sm">
                <span ><strong >ชื่อ Campaign *</strong></span>
                </div>
                
                    <q-input outlined v-model="text1" label="Campaign"/>
            </q-card-section>

            <q-card-section class="text-left">
             <div class="q-pb-sm">
             <strong>ของรางวัล *</strong>
             </div>
                
                    <q-input outlined v-model="text2" label="Voucher"/>
            </q-card-section>

            <q-card-section class="text-left">
                <div class="row">
                <div class="col">
                <div class="q-pb-sm">
                 <strong>จำนวนของรางวัล *</strong>  
                </div>
                     
                <q-input
                        v-model.number="model1"
                        label="กรุณาระบุตัวเลข"
                        type="number"
                        filled
                        style="width:220px"/>  

        </div>
       
       <div class="col">
       <div class="q-pb-sm">
       <strong>ระยะเวลา *</strong>
       </div>
            
             
                <q-input v-model="date" filled type="date"  style="max-width: 300px" />
            
       </div>   
       </div>
    </q-card-section>
    <q-card-section class="text-left">
        <div class="row">
        <div class="col">
        <div class="q-pb-sm">
        <strong>มังกร *</strong>   
        </div>
             
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
                style="width: 220px"
            />  

        </div>
       
       <div class="col">
       <div class="q-pb-sm">
        <strong>ความหน่วงในการออกของมังกร *</strong>
       </div>
           
             
                <q-input
                v-model.number="model2"
                label="กรุณาระบุตัวเลข"
                type="number"
                filled
                style="max-width: 300px"/>  
            
       </div>   
       </div>
    </q-card-section>
    
   
 
      <q-footer bordered class="bg-grey-1 text-primary">
        <q-tabs no-caps active-color="primary" indicator-color="transparent" class="text-grey" v-model="tab">
        <div class="q-py-sm">
        <q-btn icon ="close" class="bg-gray-1 text-black" @click="drawerRight = !drawerRight" box dense label="ยกเลิก" />
        </div>
     <q-space/>
          <div class="q-py-sm">
          <q-btn color="primary" label="บันทึก" />
          </div>
           
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
             text1: ref(''),
             text2: ref(''),
             text3: ref(''),
             model1: ref(''),
             model2: ref(''),
             modelAdd: ref(null),
             date: ref('00/00/0000')



        }

    }
}


</script>
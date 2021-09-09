<template>

   <div class="q-pa-xl">
    <q-drawer
        overlay
        side="right"
        v-model="isOpenDrawer"
        show-if-above
        bordered
        :width="600"
        :height="auto"
        :breakpoint="600"
        class="bg-grey-1">

      <div class="q-pa-md">
        <q-layout container style="width:auto; height:870px;"  >
        
            <q-toolbar>
                <q-toolbar-title > 
                    <span class="text-h6 text-weight-bold">สร้างสูตรผสม COIN</span>   
                </q-toolbar-title>
                    <q-btn flat @click=" toggleDrawer" box dense icon="close" />
            </q-toolbar>    
            <q-separator />   
                      
            <q-card-section class="text-left">
                <div class="q-pb-sm">
                <span ><strong >ชื่อสูตร *</strong></span>
                </div>
                
                    <q-input outlined v-model="text3" label="สูตร"/>
            </q-card-section>
                      
            <q-card-section class="text-left">
                <div class="q-pb-sm">
                <span ><strong >ของรางวัล *</strong></span>
                </div>
                
                    <q-input outlined v-model="text3" label="Voucher"/>
            </q-card-section>

            <q-card-section class="text-left">
              <div class="row">
                  <div class="col-6 col-md-4 text-black"><strong>BLACK 20</strong></div>
                  <div class="col-6 col-md-4 text-red"><strong>RED 20</strong></div>
                  <div class="col-6 col-md-4 text-blue"><strong>BLUE 20</strong></div>
                  <div class="col-6 col-md-4 text-green"><strong>GREEN 20</strong></div>
                  <div class="col-6 col-md-4 text-white"><strong>WHITE 20</strong></div>
              </div>

            </q-card-section>
        
      <q-footer bordered class="bg-grey-1 text-primary">
        <q-tabs no-caps active-color="primary" indicator-color="transparent" class="text-grey" v-model="tab">
        <div class="q-py-sm">
          <q-btn icon ="close" class="bg-gray-1 text-black" @click=" toggleDrawer" box dense label="ยกเลิก" />
          </div>
          <q-space/>
          <div class="q-py-sm">
          <q-btn icon ="close" class="bg-primary text-white" @click=" toggleDrawer" box dense label="บันทึก" />
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
data() {
  return {
    isOpenDrawer : false
  }
},

    methods: {
      toggleDrawer() {

        this.isOpenDrawer = !this.isOpenDrawer
      }
    },
    setup(){

        return{

             drawerRight: ref(false),
             text1: ref(''),
             text2: ref(''),
             dense: ref(false)

        }

    }
}


</script>
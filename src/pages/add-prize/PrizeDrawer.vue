<template>

   <div class="q-pa-xl">
    <q-drawer
        overlay
        side="right"
        v-model="isOpenDrawer"
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
                    <q-btn flat @click="toggleDrawer" box dense icon="close" />
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
        
        <q-input 
        outlined 
        v-model="name" 
        label="Voucher" />
        </div>
    <strong>ประเภทรางวัล *</strong>
       <div class="q-pa-md" style="max-width: 300px">
          <q-select outlined  v-model="type" :options="options" label="Standard" />
      </div>
    <strong>รายละเอียด *</strong>
    <div class="q-pa-md">
    <q-input class="bg-grey-0 "
        v-model="description"
        outlined
        type="textarea"
        />
        
    </div>
      <q-footer bordered class="bg-grey-1 text-primary">
        <q-tabs no-caps active-color="primary" indicator-color="transparent" class="text-grey" v-model="tab">
          <q-btn icon ="close" class="bg-gray-1 text-black" @click="toggleDrawer" box dense label="ยกเลิก" />
          <q-space/>
           <q-btn @click="createPrize" color="primary" label="บันทึก" />
        </q-tabs>
      </q-footer>
    </q-layout>   
  </div>
  </q-drawer>
  </div>

  
</template>

<script>
import { ref } from 'vue'
import { createNewPrize } from 'src/util/services';

export default {
  methods: {
     toggleDrawer() {

        this.isOpenDrawer = !this.isOpenDrawer
    },
  },
  data() {
  return {
    isOpenDrawer : false
  }
},
    name:'PrizeDrawer',
    setup(){
      const name = ref('');
      const description = ref('');
      const tab = ref('');
      const type = ref('');
    
      const createPrize = async() => {
      const createPrizeFormat = {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        name: name.value,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        type: type.value,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        description: description.value,
      };

      const isCreatePrizeSuccess = await createNewPrize(createPrizeFormat);
      console.log(isCreatePrizeSuccess);

       if (!isCreatePrizeSuccess) {
        console.log('การสร้างงานของท่านไม่สำเร็จ');
      } else {
        console.log('สร้างงานเสร็จสิ้น');
      }
      };
        return{
  
             drawerRight: ref(false),
             textareaModel: ref(''),
             text3: ref(''),
            model: ref(null),
            options: [
              'point', 'voucher', 'prize',
            ],
             name,
             description,
             createPrize,
             tab,
             type,
        }
    }
}


</script>
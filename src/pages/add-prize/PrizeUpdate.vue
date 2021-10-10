<template>
    <div class="">
    <q-drawer
      overlay
      side="right"
      v-model="isOpenDrawer"
      bordered
      class="bg-grey-1"
    >
      <div class="q-pa-md">
          <q-toolbar>
            <q-toolbar-title>
              <span class="text-h6 text-weight-bold">สร้างของรางวัล</span>
            </q-toolbar-title>
            <q-btn flat @click="toggleDrawer" box dense icon="close" />
          </q-toolbar>
          <q-separator />

          <div class="q-pa-md">
            <span><strong>รูปของรางวัล *</strong></span>
            <q-card-section class="text-left">
              <q-btn
                no-caps
                icon="add "
                style="border: dashed 2px #c2c2c2; height: 150px; width: 130px"
                flat
                :ripple="false"
                label="Upload jpeg.jpg.png"
              >
              </q-btn>
            </q-card-section>
          </div>

          <strong>ชื่อของรางวัล *</strong>
          <div class="q-pa-md">
            <q-input outlined v-model="name" label="Voucher" />
          </div>
          
          <strong>ประเภทรางวัล *</strong>
          <div class="q-pa-md" style="max-width: 300px">
            <q-select
              outlined
              v-model="type"
              :options="options"
              label="Standard"
            />
          </div>
          
          <strong>รายละเอียด *</strong>
          <div class="q-pa-md">
            <q-input
              class="bg-grey-0"
              v-model="description"
              outlined
              type="textarea"
            />
          </div>
          
          <div class="row justify-between q-pa-md">
              <q-btn
                icon="close"
                class="bg-gray-1 text-black"
                @click="toggleDrawer"
                box
                dense
                label="ยกเลิก"
              />
              <q-space />
              <q-btn @click="updatePrize" color="primary" label="แก้ไขรางวัล" />
          </div>
      </div>
    </q-drawer>
  </div>
</template>

<script>
import { ref } from 'vue'
import { updatePrize } from 'src/util/services';

export default {
  props: {
    rowData: Object,
  },
  methods: {
     toggleDrawer() {
        console.log("test", this.$props.rowData);
        this.isOpenDrawer = !this.isOpenDrawer
    },
  },
    setup(props,{emit}){
      
      const name = ref('');
      const description = ref('');
      const type = ref('');

        return{
            textareaModel: ref(''),
            text3: ref(''),
            model: ref(null),
            options: ref(),
             name,
             description,
             type,
             updatePrize,
             isOpenDrawer: ref(false)
        }
    }
}
</script>

<style>

</style>
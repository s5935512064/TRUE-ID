<template>
  <div class="q-pa-lg">
    <span class="text-h5 text-weight-bold">สร้าง CAMPAIGN</span>
     <div class="row justify-between q-my-sm q-col-gutter-x-md">
       <div class="col-4">
        <q-input
              v-model="filter" 
              style="max-width: 350px"
              outlined
              dense
              bg-color="white"
              color="black"
              class="border-none outline-none"
              placeholder="Campaign Name or Prize"
            >
              <template v-slot:prepend>
                <q-icon name="search" />
              </template>
        </q-input>
       </div>
        
        <div class="col-4">
           <q-input
              outlined
              dense
              bg-color="white"
              color="black"
              class="border-none outline-none"
              v-model="modelInString" 
              mask="####-##-## - ####-##-##" 
                           
              >
            
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date 
                  v-model="model" 
                  range
                  @update:model-value="onCalendarSelected">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
          </q-input>
        </div>

        <div class="col-4">
          <div class="row justify-end">
            <CampaignDrawer />  
          </div>
        </div>
     </div>
     
      <CampaignTable />
 

    </div>
</template>

<script>
import { ref } from 'vue';
import CampaignTable from './CampaignTable.vue';
import CampaignDrawer from './CampaignDrawer.vue';


  export default {
  components: { 
    CampaignTable,
    CampaignDrawer,
  
  },
    setup () {
      const model = ref(null);
      const modelInString = ref('');
      const onCalendarSelected = (model) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const { from, to } = model;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        modelInString.value = `${from} ${to}`
      }

      return {

        filter: ref(''),
        model,
        onCalendarSelected,
        modelInString,
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>

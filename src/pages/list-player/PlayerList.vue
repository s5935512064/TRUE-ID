/* eslint-disable vue/valid-v-model */
<template>
  <div class="q-pa-xl">
      <span class="text-h6 text-weight-bold">รายการผู้เล่น</span>
     <div class="row items-center q-gutter-x-md">
        <q-input
              style="max-width: 350px"
              outlined
              dense
              bg-color="white"
              color="black"
              class="q-my-md border-none outline-none"
              placeholder="ค้นหา User ID"
            >
              <template v-slot:prepend>
                <q-icon name="search" />
              </template>
        </q-input>
        <span>ช่วงเวลา</span>
        <div style="width: 300px">
          <q-input
              outlined
              dense
              bg-color="white"
              color="black"
              class="q-py-md border-none outline-none"
<<<<<<< Updated upstream
              v-model="modelInString" 
              mask="####-##-## - ####-##-##" 
                           
=======
              v-model="date"
>>>>>>> Stashed changes
              >
            
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
<<<<<<< Updated upstream
                  <q-date 
                  v-model="model" 
                  range
                  @update:model-value="onCalendarSelected">
=======
                  <q-date v-model="date" range>
>>>>>>> Stashed changes
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
          </q-input>
        </div>
     </div>

      <player-table />

    </div>
</template>

<script>
import { ref } from 'vue';
import PlayerTable from './PlayerTable.vue';

  export default {
  components: { 
    PlayerTable 
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
        model,
        onCalendarSelected,
        modelInString,
      }
    }
  }
</script>

<style>

</style>
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
              v-model="model" 
              mask="####-##-## - ####-##-##" 
              :rules="['date']"              
              >
            
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="model" range>
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
      return {
        model: ref({ from: '2020/07/08', to: '2020/07/17' })
      }
    }
  }
</script>

<style>

</style>
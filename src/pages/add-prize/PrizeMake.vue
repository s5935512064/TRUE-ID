<template>
  <div class="q-pa-xl">
      <span class="text-h6 text-weight-bold">รางวัล</span>
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
       
       
     </div>
      <PrizeTable/>
      <PrizeDrawer/>

    </div>
</template>

<script>
import { ref } from 'vue';
import PrizeTable from './PrizeTable.vue';
import PrizeDrawer from './PrizeDrawer.vue';

  export default {
  components: { 
    PrizeTable ,
    PrizeDrawer
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
<template>
  <div class="q-pa-lg">
     <span class="text-h5 text-weight-bold">รางวัล</span>
     <div class="row justify-between q-my-sm">
       <div class="col">
        <q-input
              v-model="filter" 
              style="max-width: 350px"
              outlined
              dense
              bg-color="white"
              color="black"
              class="border-none outline-none"
              placeholder="ชื่อรางวัล/รายละเอียด"
            >
              <template v-slot:prepend>
                <q-icon name="search" />
              </template>
        </q-input>
       </div>
       <div class="col">
         <div class="row justify-end">
            <PrizeDrawer @created="refreshPrize" /> 
         </div>
       </div> 
     </div>
          
      <PrizeTable :rows="rows" @deleted="refreshPrize" />
      
     
  </div>
</template>

<script>
import { ref, onMounted} from 'vue';
import PrizeTable from './PrizeTable.vue';
import PrizeDrawer from './PrizeDrawer.vue';
import { getPrize } from 'src/util/services';


  export default {
  components: { 
    PrizeTable ,
    PrizeDrawer
   
  },
    setup () {
        const rows = ref([]);
        onMounted(() => {
        void getPrize().then((prizes)=>{
        rows.value = prizes;
      })
    });
        const refreshPrize = () => {
          void getPrize().then((prizes)=>{
          rows.value = prizes;
      })
        }

      return {
        model: ref({ from: '2020/07/08', to: '2020/07/17' }),
        filter: ref(''),
        rows,
        refreshPrize,
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
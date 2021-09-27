<template>
  <div class="q-pa-xl">
      <span class="text-h6 text-weight-bold">รางวัล</span>
     <div class="row items-center q-gutter-x-md">
        <q-input
              v-model="filter" 
              style="max-width: 350px"
              outlined
              dense
              bg-color="white"
              color="black"
              class="q-my-md border-none outline-none"
              placeholder="ชื่อรางวัล/รายละเอียด"
            >
              <template v-slot:prepend>
                <q-icon name="search" />
              </template>
        </q-input>
 
     </div>
      <PrizeTable :rows="rows" />
      <PrizeDrawer @created="refreshPrize" /> 
     

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

<style>

</style>
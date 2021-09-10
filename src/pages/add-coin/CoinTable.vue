<template>



  <div class="q-pa-md">

       
    <div class="row items-start">

      <div class="col">
      <div class="q-px-md">
      <strong>Campaign Name</strong>
      </div>     
      </div>

      <div class="col">
      <div class="q-px-xl">
       <strong>Prize</strong>
      </div>
      </div>

      <div class="col">
      <div class="q-px-xl">
      <strong>Period</strong>
      </div>
      </div>

    </div>

     
       <div class="q-py-md">
    <q-table
      :grid="$q.screen.xl"
      grid-header
      :rows="rows"
      :columns="columns"
      row-key="name"
      
      hide-header   
      v-model:pagination="pagination"
      hide-pagination
    />
    </div>

 


 <q-footer bordered class="bg-grey-1 text-primary">
        
             <div class="row justify-left q-px-md">
      <q-pagination
        v-model="pagination.page"
        color="red-8"
        :max="pagesNumber"
        size="md"
      />
    </div>
        
      </q-footer>
  
  </div>
</template>

<script>
import { ref, computed } from 'vue'

const columns = [

  { name: 'campaignname',align: 'left',  label: 'Campaign Name', field: 'campaignname', sortable: true },
  { name: 'prize', align: 'center', label: 'Prize', field: 'prize', sortable: true },
  { name: 'period',align: 'right', label: 'Period', field: 'period', sortable: true },
 
]

const rows = [
  {
   
    campaignname: 'Campaign A',
    prize: 'Iphone 12 Pro',
    period: '20/02/2021'
   
  },
  {
   
    campaignname:'Campaign B',
    prize: 'Nokia 3310',
    period: '25/09/2021'
    
  },
  {
   
    campaignname: 'Campaign C',
    prize: 'Iphone 12 Pro',
    period: '22/11/2021'
   
  },
  {
   
    campaignname: 'Campaign D',
    prize: 'Samsung 5F',
    period: '11/08/2021'
    
  },
  {
   
    campaignname: 'Campaign D',
    prize: 'Samsung 5F',
    period: '11/08/2021'
    
  },
  {
   
    campaignname: 'Campaign D',
    prize: 'Samsung 5F',
    period: '11/08/2021'
    
  },
  {
   
    campaignname: 'Campaign D',
    prize: 'Samsung 5F',
    period: '11/08/2021'
    
  },

  
]

export default {
  setup () {
    const pagination = ref({
      sortBy: 'desc',
      descending: false,
      page: 1,
      rowsPerPage: 3
      // rowsNumber: xx if getting data from a server
    })

    return {
      pagination,
      columns,
      rows,

      pagesNumber: computed(() => Math.ceil(rows.length / pagination.value.rowsPerPage))
    }
  }
}
</script>


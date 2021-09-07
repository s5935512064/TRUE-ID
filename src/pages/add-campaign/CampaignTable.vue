<template>
  <div class="q-pa-md">

       <!--
   <div>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
     </div>

        /// Table //
             grid
            grid-header 

      -->
      
     
              
    <q-table
            
            grid
            
            :rows="rows"
            :columns="columns"
            row-key="name"
            :filter="filter"
            
    >
    </q-table>
        
 
  </div>
</template>
<script>
import { ref } from 'vue'

const columns = [
  {
    name: 'campaign name',
    required: true,
    label: 'Campaign Name',
    align: 'left',
    field: row => row.name,
    sortable: true
  },
  { name: 'prize', align: 'center', label: 'Prize', field: 'prize', sortable: true },
  { name: 'period', align: 'right',label: 'Period', field: 'period', sortable: true },
 
]



const rows = [
  {
    name: 'Iphone 12 Pro',
    prize: 10,
    period: '20/05/2021',
   
  },
  {
    name: 'Samsung Galaxy',
    prize: 12,
    period: '25/05/2021',
   
  },
 
 
]

export default {
  setup () {
    return {
      filter: ref(''),
      columns,
      rows,
    
    }
  }
}
</script>


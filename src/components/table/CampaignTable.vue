<template>
  <div class="q-pa-md">
  <strong>สร้าง CAMPAIGN</strong>
  
    <q-table
      grid
      grid-header
      title="สร้าง CAMPAIGN"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :filter="filter"
      hide-header
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </div>
</template>
<script>
import { ref } from 'vue'

const columns = [
  {
    name: 'desc',
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
    prize: 159,
    period: 6.0,
   
  },
  {
    name: 'Samsung Galaxy S20',
    prize: 237,
    period: 9.0,
   
  },
  {
    name: 'Iphone 11 Pro',
    prize: 452,
    period: 25.0,
    
  },
  {
    name: 'Iphone 12 ',
    prize: 518,
    period: 26.0,
    
  }
]

export default {
  setup () {
    return {
      filter: ref(''),
      columns,
      rows
    }
  }
}
</script>

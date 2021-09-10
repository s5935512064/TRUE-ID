<template>
  <div class="q-pa-md">


 
    <q-table
      :grid="$q.screen.xl"
      grid-header
     
      :rows="rows"
      :columns="columns"
      row-key="name"
     
      hide-header
      

    >

    </q-table>
  </div>
</template>


<script>
//import { ref } from 'vue'

const columns = [

   { name: 'image',align: 'left', label: 'รูป', field: 'image', sortable: true },
   { name: 'campaignname',align: 'center', label: 'ชื่อรางวัล', field: 'campaignname', sortable: true },
   { name: 'period', align: 'right', label: 'รายละเอียด', field: 'period', sortable: true },
  
]

const rows = [
  {
    image: 'รูป 1',
    campaignname: 'Iphone 12 pro',
    period: 'Iphone 12 pro',
   
  },
  {
    image: 'รูป 2',
    campaignname: 'Samsung 5G',
    period: 'Samsung 5G',
    
  },
  {
    image: 'รูป 3',
    campaignname: 'Iphone 11 pro',
    period: 'Iphone 11 pro',
    
  },
{
    image: 'รูป 4',
    campaignname: 'Nokia 3310',
    period: 'Nokia 3310',
    
  },


]

export default {
  setup () {
    return {
    
      columns,
      rows
    }
  }
}
</script>
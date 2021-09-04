<template>
  <div class="q-pa-xl">

    <div class="row">
      <div class="col-sm-9" style="max-width: 700px">
        <strong>สร้าง CAMPAIGN</strong>
        
        <div class="row">
          <div class="col-8 col-sm-6">

           <q-input outlined v-model="text" placeholder="Campaign Name or Prize" > 
           <template v-slot:prepend>
          <q-icon name="search" />
        </template>
        </q-input>
            
          </div>
          <div class="col-4 col-sm-6">
              <q-input filled v-model="date" mask="date" :rules="['date']">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date v-model="date">
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
         <div class="row reverse">
      <div class="col">
        <strong>Perios</strong>
      </div>
      <div class="col">
       <strong>Prize</strong>
      </div>
      <div class="col" >
        <strong>Campaign Name</strong>
      </div>
    </div>
  <q-table
      title="Treats"
      :rows="rows"
      :columns="columns"
      row-key="name"
    />


      </div>
    </div>

  </div>
</template>

<script>
import { ref } from 'vue'

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Campaign Name',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'prize', align: 'center', label: 'Prize', field: 'prize', sortable: true },
  { name: 'period', label: 'Period', field: 'period', sortable: true },
  
]

const rows = [
  {
    name: 'Campaign A',
    prize: 'Iphone 12 Pro',
    period: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%'
  },
  {
    name: 'Campaign B',
    prize: 'Samsung 5G',
    period: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    iron: '1%'
  },
  
 
]

export default {
  setup () {
    return {
      columns,
      rows,
      text: ref(''),
      ph: ref(''),
      dense: ref(false)

    }
  }
}
</script>
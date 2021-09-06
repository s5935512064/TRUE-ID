<template>
<div id="q-app" style="min-height: 100vh;">
  <div class="q-pa-md">
    <q-table
      :rows="rows"
      :columns="columns"
      row-key="name"
    >

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="prize" :props="props">
            <q-badge >
              {{ props.row.prize }}
            </q-badge>
          </q-td>
          <q-td key="period" :props="props">
            <q-badge >
              {{ props.row.period }}
            </q-badge>
          </q-td>
         
      </template>
    </q-table>
  </div>
</div>
</template>

<script>

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
    name: 'Iphone 12 Pro',
    prize: 10,
    period: '20/12/2012-20/01/2021',
   
  },
  {
    name: 'Samsumg 5G',
    prize: 20,
    period: '20/12/2012-20/01/2021',
   
  },
  {
    name: 'Nokia 3310',
    prize: 5,
    period: '20/12/2012-20/01/2021',
  
  },


]

const app = Vue.createApp({
  setup () {
    return {
      columns,
      rows
    }
  }
})

app.use(Quasar, { config: {} })
app.mount('#q-app')

</script>
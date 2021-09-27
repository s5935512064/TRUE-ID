<template>
    <div class="q-pa-md">
    <q-table
      :grid="$q.screen.xl"
      :rows="tempRow"
      :columns="columns"
      row-key="name"
      :filter="filter"
    >
    <template v-slot:body-cell-image = "props" >
      <q-td >
        <q-img style="max-width: 30px" :src="`${url}/${props.row.images[0].url}`">
        </q-img>
      </q-td>
    </template>
    </q-table>
  </div>
</template>


<script>
import { ref } from 'vue'
import { baseURL } from 'src/util/services';

const columns = [
  { name: 'image',align: 'center', label: 'รูป', field: 'image', sortable: true },
   { name: 'name',align: 'center', label: 'ชื่อรางวัล', field: 'name', sortable: true },
   { name: 'description', align: 'center', label: 'รายละเอียด', field: 'description', sortable: true },
]

export default {
  props:{
    row: Array,
  },
  setup(props) {
    const tempRow = ref(props.row);
    const url = ref(baseURL);
    return {
      filter: ref(''),
      tempRow,
      columns,
      url,
    }
  }
}
</script>
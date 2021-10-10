<template>
    <div class="q-py-md">
    <q-table
      class="my-sticky-header-table"
      :rows="rows"
      :columns="columns"
      
      :filter="filter"
      v-model:pagination="pagination"
      hide-pagination
    >
    </q-table>
    </div>


</template>

<script>
import { ref, computed } from 'vue'
import { baseURL } from 'src/util/services';

const columns = [

  { name: 'name',align: 'center', label: 'ชื่อรางวัล', field: 'name', sortable: true },
 
]

export default {
  props:{
    rows: {type: Array},
  },
  setup (props,{emit}) {
    const url = ref(baseURL);
    const pagination = ref({
      sortBy: 'desc',
      descending: false,
      page: 1,
      rowsPerPage: 7
      // rowsNumber: xx if getting data from a server
    });

    return {
      filter: ref(''),
      columns,
      current: ref(3),
      pagination,
      pagesNumber: computed(() => Math.ceil(props.rows.length / pagination.value.rowsPerPage)),

    }
  }
}
</script>


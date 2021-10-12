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
    <template v-slot:body-cell-prize = "props" >
      <q-td>
        {{ props.row.prize.name }}
      </q-td>
    </template>
    <template v-slot:body-cell-dragons = "props" >
      <q-td>
        {{ props.row.dragons[0].name }}
      </q-td>
    </template>
    <template v-slot:body-cell-period = "props" >
      <q-td>
        {{ props.row.start }} - {{ props.row.end }}
      </q-td>
    </template>
    <template v-slot:body-cell-action = "props" >
      <q-td>
        <div class="row justify-center">
          <q-btn flat icon="more_vert">
              <q-popup-edit
                style="padding: 0; margin: 0"
                v-model.number="props.row.action"
                auto-save
                v-slot="scope"
              >
                <q-list bordered separator>
                  <q-item class="text-center" clickable v-ripple>
                    <div class="row inline items-center">
                      <span class="q-mx-xs">
                      <q-icon name="edit"></q-icon>
                      </span>
                      <q-item-section v-close-popup @click="">แก้ไข</q-item-section>
                    </div>
                  </q-item>

                  <q-item class="text-center" clickable v-ripple active-class="text-orange">
                    <div class="row inline items-center">
                      <span class="q-mx-xs">
                      <q-icon name="delete"></q-icon>
                      </span>
                      <q-item-section @click=""> ลบทิ้ง </q-item-section>
                    </div>
                  </q-item>
                </q-list>
              </q-popup-edit>

            </q-btn>
        </div>
      </q-td>
    </template>
    </q-table>

    <div class="row items-end justify-center q-mt-md">
      <q-pagination
        v-model="pagination.page"
        :max="pagesNumber"
        color="negative"
        size="md"
        direction-links
      />
    </div>




    </div>


</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { baseURL } from 'src/util/services';

const columns = [

  { name: 'name',align: 'center', label: 'ชื่อ Campaign', field: 'name', sortable: true },
  { name: 'prize',align: 'center', label: 'ของรางวัล', field: 'prize', sortable: true },
  { name: 'prize_capacity',align: 'center', label: 'จำนวนของรางวัล', field: 'prize_capacity', sortable: true },
  { name: 'period',align: 'center', label: 'ระยะเวลา', field: 'period', sortable: true },
  { name: 'dragons',align: 'center', label: 'มังกร', field: 'dragons', sortable: true },
  { name: 'spawn_interrval',align: 'center', label: 'ความหน่วงในการออกของมังกร', field: 'spawn_interrval', sortable: true },
  { name: 'action', align: 'center', label: 'จัดการ', field: 'action' },
 
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

<style lang="sass">
.my-sticky-header-table
  /* height or max-height is important */

  .q-table__top,

  thead tr:first-child th
    /* bg color is important for th; just specify one */

    font-weight: bold

</style>


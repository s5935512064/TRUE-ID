<template>
    <div class="q-py-md">
    <q-table
      class="my-sticky-header-table"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :filter="filter"
      v-model:pagination="pagination"
      hide-pagination
    >
    <template v-slot:body-cell-image = "props" >
      <q-td>
        <div class="row justify-center">
        <q-img style="max-width: 50px" :src="`${url}/${props.row.images[0]?.url}`">
        </q-img>
        </div>
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
                      <q-item-section v-close-popup @click="updateClick(props.row)">แก้ไข</q-item-section>
                    </div>
                  </q-item>

                  <q-item class="text-center" clickable v-ripple active-class="text-orange">
                    <div class="row inline items-center">
                      <span class="q-mx-xs">
                      <q-icon name="delete"></q-icon>
                      </span>
                      <q-item-section @click="isDeletePrize(props.row.id)"> ลบทิ้ง </q-item-section>
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

    <PrizeUpdate 
      v-show="isShowDialog === 'update'"
      ref="updateClick"
      :rowData="actionType"/>

  </div>
</template>


<script>
import { ref, computed } from 'vue';
import { baseURL, deletePrize } from 'src/util/services';
import PrizeUpdate from './PrizeUpdate.vue';

const columns = [
  { name: 'image',align: 'center', label: 'รูป', field: 'image',},
   { name: 'name',align: 'center', label: 'ชื่อรางวัล', field: 'name', sortable: true },
   { name: 'type',align: 'center', label: 'ประเภทรางวัล', field: 'type', sortable: true},
   { name: 'description', align: 'center', label: 'รายละเอียด', field: 'description'},
   { name: 'action', align: 'center', label: 'จัดการ', field: 'action' },
]

export default {
  props:{
    rows: {type: Array},
  },
  components: { 
    PrizeUpdate,
  },
  methods: {
     updateClick(rowData) {
        console.log(rowData)
        this.isShowDialog = "update";
        this.$refs.updateClick.toggleDrawer();
        this.actionType = rowData;
        this.$emit("updatePrize", rowData);
    },
  },
  setup(props, {emit}) {
      const isShowDialog = ref(null);
      const actionType = ref(null);
      const isDeletePrize = async(id) => {

      const isconfirmDeletePrize = confirm("ต้องการลบของรางวัลนี้หรือไม่");
      if(isconfirmDeletePrize){
        const isDeleteSuccess = await deletePrize(id);
        
        if (isDeleteSuccess) {
          console.log('ลบรางวัลเสร็จสิ้น');
          emit("deleted")
        }
        else{
          console.log('ลบรางวัลไม่สำเร็จ');
        }
      }}

    const pagination = ref({
      sortBy: 'desc',
      descending: false,
      page: 1,
      rowsPerPage: 7
      // rowsNumber: xx if getting data from a server
    });
    const url = ref(baseURL);
    
    return {   
      filter: ref(''),
      columns,
      current: ref(3),
      pagination,
      url,
      pagesNumber: computed(() => Math.ceil(props.rows.length / pagination.value.rowsPerPage)),
      isDeletePrize,
      actionType,
      isShowDialog

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
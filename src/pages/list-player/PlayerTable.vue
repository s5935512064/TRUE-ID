<template>
  <div>
    <q-table
        :grid="$q.screen.xl"
        class="my-sticky-header-table"
        :rows="rows"
        :columns="columns"
    />
  </div>
</template>

<script>
  const columns = [
      {
        name: 'Datepick',
        label: 'วันที่จับมังกร',
        field: 'Datepick',
        align: 'left',
      },
      {
        name: 'userID',
        label: 'User ID',
        field: 'userID',
        align: 'left',
      },
      {
        name: 'prize',
        label: 'รางวัล ',
        field: 'prize',
        align: 'left',
      },
      {
        name: 'location',
        label: 'สถานที่จับมังกร ',
        field: 'location',
        align: 'left',
      },
    ];
    const rows = [
      {
        Datepick: '24 ม.ค. 2564, 19:00',
        userID: '51147223345',
        prize: '500',
        location: 'Siam Center',
      },
    ];

export default {
  setup () {
    return { columns, rows }
  }
}
</script>

<style lang="sass">
.my-sticky-header-table
  /* height or max-height is important */
  height: 310px

  .q-table__top,
  thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: #DDE0EA
    font-weight: bold

  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
</style>
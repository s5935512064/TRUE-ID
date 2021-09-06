<template>
  <div>
    <q-card>
      <q-card-section>
          <div class="text-subtitle1 text-weight-bold">BLUE</div>
      </q-card-section>

      <q-separator />
       <q-card-section>
          <q-table
          :rows="rows"
          :columns="columns"
          />
      </q-card-section>

      <q-card-section class="text-center">
        <q-btn class="full-width"
        style="border: dashed 2px #6594e0;"
        flat :ripple="false" 
        color="primary" label="+ Add" 
        no-caps></q-btn>
      </q-card-section>

    </q-card>
      
  </div>
</template>
<script>
    const columns = [
      {
        name: 'latitude',
        label: 'Latitude',
        field: 'latitude',
        align: 'center',
      },
      {
        name: 'longtitude',
        label: 'Longtitude',
        field: 'longtitude',
        align: 'center',
      },
      {
        name: 'radius',
        label: 'รัศมี(KM)',
        field: 'radius',
        align: 'center',
      },
    ];
    const rows = [
      {
        latitude: '1',
        longtitude: '1',
        radius: '5',
      },
    ];

export default {
  setup () {
    return { columns, rows }
  }
}
</script>
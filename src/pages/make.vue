<template>
 <strong >สร้าง CAMPAIGN</strong>
  <div class="q-pa-md" style="max-width: 700px">

  
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
    <strong>ชื่อ Campaign *</strong>
    <q-input outlined v-model="text" label="Campaign" />
    <strong>ของรางวัล *</strong>
    <q-input outlined v-model="text" label="Voucher" />
  <div class="row">
      <div class="col">
       <strong>จำนวนของรางวัล *</strong>
    <q-input
      v-model.number="model"
      placeholder="กรุณาระบุตัวเลข"
      type="number"
      filled
      style="max-width: 350px"
    />

 
      </div>
      <div class="col">
      <strong>ระยะเวลา *</strong>
        <q-input v-model="date" filled type="date" hint="Native date" />
      </div>
    </div>
     

 <div class="row">
      <div class="col">
      <strong>มังกร *</strong>
      <q-select outlined v-model="model" :options="options" :dense="dense" :options-dense="denseOpts">
        <template v-slot:prepend>
        
        </template>
      </q-select>
      </div>
      <div class="col">
      <strong>ความหน่วงในการออกของมังกร *</strong>
      <q-input
      v-model.number="model"
      placeholder="กรุณาระบุตัวเลข"
      type="number"
      filled
      style="max-width: 350px"
    />
      </div>
    </div>
    </q-form>

  </div>
    
</template>
<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  setup () {
    const $q = useQuasar()

    const name = ref(null)
    const age = ref(null)
    const accept = ref(false)

    return {
      model: ref(null),

      options: [
        'Black', 'RED', 'BLUE', 'GREEN', 'WHITE'
      ],

      dense: ref(false),
      denseOpts: ref(false),
      name,
      age,
      accept,

      onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },

      onReset () {
        name.value = null
        age.value = null
        accept.value = false
      }
    }
  }
}
</script>

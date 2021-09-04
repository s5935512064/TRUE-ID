<template>
  <div class="q-pa-md">

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
     <div class="row reverse">
      <div class="col">
        23 Jun 2021
      </div>
      <div class="col">
       Iphone 12 Pro
      </div>
      <div class="col">
        Campaign A
      </div>
    </div>
    <div class="row reverse">
      <div class="col">
        25 Jun 2021
      </div>
      <div class="col">
       Iphone 11 Pro
      </div>
      <div class="col">
        Campaign B
      </div>
    </div>

      </div>
    </div>

  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      text: ref(''),
      ph: ref(''),
      dense: ref(false)
    }
  }
}
</script>
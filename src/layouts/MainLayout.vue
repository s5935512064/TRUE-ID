<template>
  <q-layout view="hHh lpR lFf">

    <q-header reveal elevated class="bg-negative text-white">
      <q-toolbar>
        <!-- <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" /> -->
        <q-toolbar-title class="q-mx-md">
          <q-avatar style="width: 60px">
            <img src="~src/assets/logo.svg">
          </q-avatar>
        </q-toolbar-title>
        <div class="q-mx-md q-gutter-x-sm">
          <q-btn flat round dense icon="notifications"/>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar.png">
          </q-avatar>
          <span>Admin</span>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer class="bg-dark" v-model="leftDrawerOpen" side="left" overlay elevated>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(true)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>
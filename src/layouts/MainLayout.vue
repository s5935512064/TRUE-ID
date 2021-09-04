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

    <q-drawer show-if-above class="bg-dark text-white" v-model="leftDrawerOpen" side="left" elevated>
      <q-list separator>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          @closeDrawer="closeDrawer"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue';
import { ref } from 'vue'

export default {
  components: {
    EssentialLink,
  },
  setup () {
    const linksList = [
      {
        title: 'สร้าง Campaign',
        icon: 'format_list_bulleted',
        link: '/',
        useMethod: 'createcampaign',
      },
      {
        title: 'Set location ให้มังกรแต่ละสี',
        icon: 'format_list_bulleted',
        link: '/',
        useMethod: 'setlocation',
      },
      {
        title: 'สร้างสูตรผสม Coin',
        icon: 'format_list_bulleted',
        link: '/',
        useMethod: 'coincreate',
      },
      {
        title: 'สร้างรางวัล',
        icon: 'format_list_bulleted',
        link: '/',
        useMethod: 'prizecreate',
      },
      {
        title: 'กำหนดสิทธิ์จับมังกรแต่ละประเภท',
        icon: 'format_list_bulleted',
        link: '/',
        useMethod: 'permission',
      },
      {
        title: 'รายการผู้เล่น',
        icon: 'format_list_bulleted',
        link: '/',
        useMethod: 'playerlist',
      },
    ];
    const leftDrawerOpen = ref(true)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>
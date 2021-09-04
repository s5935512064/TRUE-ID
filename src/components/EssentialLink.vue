<template>
 <div>
    <q-item
    clickable
    tag="btn"
    target="_blank"
    class="q-mx-sm q-my-sm"
    @click="getMethod"
  >
    <q-item-section
    class="q-px-sm"
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section class="q-mt-sm">
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    },
    useMethod: String,
  },
  methods: {
    getMethod() {
      const params = this.$props.useMethod;
      switch (params) {
        case 'createcampaign':
          void this.$router.push('/createcampaign');
          break;
        case 'setlocation':
          void this.$router.push('/setlocation');
          break;
        case 'coincreate':
          void this.$router.push('/coincreate');
          break;
        case 'prizecreate':
          void this.$router.push('/prizecreate');
          break;
        case 'permission':
          void this.$router.push('/permission');
          break;
        case 'playerlist':
          void this.$router.push('/playerlist');
          break;
        default:
      }
    },
  },
});
</script>

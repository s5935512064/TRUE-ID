<template>
    <div class="bg-color window-width window-height login-page-layout">
        <div class="absolute-center q-pa-xs" style="max-width: 500px">
                <div class="column items-center q-gutter-y-md">
                <q-img style="width: 200px" src="~src/assets/profile.png"></q-img>
                <q-input class="full-width" label="@username" bg-color="white" rounded outlined v-model="text">
                    <template v-slot:prepend>
                    <q-avatar>
                        <q-icon size="md" name="person"></q-icon>
                    </q-avatar>
                    </template>
                </q-input>
                <q-input class="full-width" 
                :type="isPwd ? 'password' : 'text'" 
                label="@password" 
                bg-color="white" 
                rounded outlined v-model="password">
                    <template v-slot:prepend>
                    <q-avatar>
                        <q-icon 
                        :name="isPwd ? 'lock' : 'lock_open'"
                        class="cursor-pointer"
                         @click="isPwd = !isPwd"
                        size="md"></q-icon>
                    </q-avatar>
                    </template>
                </q-input>
                <q-btn  rounded outlined
                        size="15px"
                        class="q-px-xl q-py-sm"
                        color="negative" label="Login" />

                <p class="text-white">Forget Password ?</p>
                </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup () {
    return {
      text: ref(''),
      password: ref(''),
      isPwd: ref(true),
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-color {
     background-image: linear-gradient(to right top, #e3191f, #e93e2c, #ef563b, #f46b4a, #f97e5a, #fb8a5f, #fd9664, #ffa16b, #ffaa67, #ffb363, #ffbd61, #ffc75f);
}
</style>
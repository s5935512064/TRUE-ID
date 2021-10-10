<template>
    <div class="bg-color window-width window-height login-page-layout">
        <div class="absolute-center q-pa-xs" style="max-width: 500px">
                <div class="column items-center q-gutter-y-md">
                <q-img style="width: 200px" src="~src/assets/profile.png"></q-img>
                <q-input class="full-width" label="@username" bg-color="white" rounded outlined v-model="userName">
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
                        @click="authorization"
                        size="15px"
                        class="q-px-xl q-py-sm"
                        color="negative" label="Login" />

                <p class="text-white">Forget Password ?</p>
                </div>
        </div>
    </div>
</template>

<script>
import { login } from 'src/util/services';
import { initUserAction } from 'src/store/user/constant';
import { User } from 'src/store/user/vo/user.vo';
import { initUserDTO } from 'src/store/user/dto/action/user.dto';
import { ref } from 'vue';

export default {
    components: {},
  name: "Login",
  data() {
    return {
      userName: null,
      password: null,
    };
  },
  methods: {
    async authorization() {
      const user = await login({
        username: this.userName,
        pass: this.password,
      });
      if (!user) {
        alert("invalid user");
        return;
      }

      const userVo = User({
        id: user.user.id,
        username: user.user.username,
        email: user.user.email,
        isconfirmed: user.user.confirmed,
        userToken: user.jwt,
      });

      localStorage.setItem("isAuthenticated", user.user.confirmed);
      localStorage.setItem("userToken", user.jwt);

      this.$store.dispatch(initUserAction, initUserDTO({ userVo }));

      this.$router.push("/");
    },
  },

    setup () {

    return {
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
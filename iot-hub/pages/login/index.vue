<template>
  <v-card class="mx-auto pa-3" align="center" max-width="344" outlined>
    <v-card-title class="justify-center"
      >Enter your account credentials</v-card-title
    >
    <v-card-text>
      <v-form ref="form">
        <v-container>
          <v-text-field
            type="email"
            v-model="email"
            label="E-mail"
            :rules="emailRules"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPass ? 'text' : 'password'"
            label="Password"
            @click:append="showPass = !showPass"
            :rules="passwordRules"
            required
          ></v-text-field>
        </v-container>
      </v-form>
    </v-card-text>
    <v-card-actions class="justify-end">
      <v-btn @click="submit()" class="px-5" color="primary">Sign in</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { FormRules, VForm } from '../../shared/formHelpers'
import VueRouter from 'vue-router'

@Component
export default class Login extends Vue {
  layout() {
    return 'login'
  }
  public email = ''
  public password = ''
  public showPass = false
  public emailRules = FormRules.emailRules()
  public passwordRules = FormRules.passwordRules()
  public submit() {
    if ((this.$refs.form as VForm).validate()) {
      this.$router.push({
        path: '/',
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>

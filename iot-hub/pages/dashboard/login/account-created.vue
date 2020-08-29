<template>
  <v-card class="mx-auto pa-3" align="center" max-width="344" outlined>
    <v-card-title class="justify-center">Account Created</v-card-title>
    <v-card-text>
      Your account has been successfully created. Check your inbox to confirm
      your e-mail.
    </v-card-text>
    <v-card-actions class="justify-end">
      <v-btn @click="submit()" class="px-5" color="primary"
        >Go To Dashboard</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { FormRules, VForm } from '../../../shared/formHelpers'
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
  public passwordHint = FormRules.passwordHint()
  public submit() {
    this.$router.push({
      path: '/dashboard',
    })
  }
}
</script>

<style lang="scss" scoped></style>

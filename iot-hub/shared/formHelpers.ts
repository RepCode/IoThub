export const FormRules = {
  emailRules(required = true) {
    return [
      (value: string) => !!value || !required || 'E-mail is required.',
      (value: string) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Invalid e-mail.'
      },
    ]
  },
  passwordRules(required = true) {
    return [
      (value: string) => !!value || !required || 'Password is required.',
      (value: string) => {
        return value.length > 7 || 'Invalid password.'
      },
    ]
  },
  passwordHint() {
    return 'At least 8 characters'
  },
}

export type VForm = Vue & { validate: () => boolean }

<template>
  <div>
    <form>
      <b-field label="Email"  :label-position="labelPosition">
       <b-input v-model="localUser.email" v-on:focusout.native="updateContactInfo"> </b-input>
      </b-field>
      <b-field label="Phone" :label-position="labelPosition">
      <b-input v-model="localUser.phone" v-on:focusout.native="updateContactInfo"> </b-input>
      </b-field>
    </form>
  </div>
</template>

<script>

export default {
  data: () => ({
    labelPosition: '',
    localUser: {}
  }),

  props: {
    user: Object
  },
  methods: {
    updateContactInfo () {
      const user = {
        email: this.localUser.email,
        phone: this.localUser.phone
      }
      this.$emit('updateContactInfo', user)
    }
  },
  created () {
    this.localUser = this.$props.user
  }
}
</script>

<style scoped>
</style>

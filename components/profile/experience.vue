<template>
<div>
  <b-field label="Experience" :label-position="labelPosition">
    <b-input
      type="textarea"
      maxlength="400"
      v-on:focusout.native="updateProfileGeneral"
      v-model="localProfile.experience"
    ></b-input>
  </b-field>
</div>
</template>

<script>
export default {
  name: 'Experience',
  data: () => ({
    labelPosition: '',
    localProfile: ''
  }),
  created () {
    this.localProfile = this.$props.profile
  },
  props: {
    profile: Object
  },

  methods: {
    updateProfileGeneral () {
      const profile = {
        experience: this.localProfile.experience
      }
      this.$emit('updateProfileGeneral', profile)
    }
  }
}
</script>

<style>
</style>

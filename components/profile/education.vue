<template>
  <div class="column">
    <div class="columns is-mobile">
      <div class="column is-full">
        <b-field label="Education" :label-position="labelPosition">
          <b-input
            type="textarea"
            maxlength="400"
            v-on:focusout.native="updateProfileGeneral"
            v-model="localEducation.education"
          ></b-input>
        </b-field>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Education',
  data: () => ({
    labelPosition: '',
    localEducation: ''
  }),
  created () {
    this.localEducation = this.$props.profile
  },
  props: {
    profile: Object
  },

  methods: {
    updateProfileGeneral () {
      const profile = {
        education: this.localEducation.education
      }
      this.$emit('updateProfileGeneral', profile)
    }
  }
}
</script>

<style scoped>
</style>

<template>
  <div class="column">
    <div class="columns is-mobile">
      <div class="column is-full">
        <b-field label="Linkedin" :label-position="labelPosition">
          <b-input
            v-on:focusout.native="updateProfileGeneral"
            v-model="localSocial.linkedin"
          ></b-input>
        </b-field>

         <b-field label="Twitter" :label-position="labelPosition">
          <b-input
            v-on:focusout.native="updateProfileGeneral"
            v-model="localSocial.twitter"
          ></b-input>
        </b-field>
         <b-field label="Github" :label-position="labelPosition">
          <b-input
            v-on:focusout.native="updateProfileGeneral"
            v-model="localSocial.github"
             icon-pack="fas"
                icon-left="check"
          ></b-input>
        </b-field>
         <b-field label="Tiktok" :label-position="labelPosition">
          <b-input
            v-on:focusout.native="updateProfileGeneral"
            v-model="localSocial.tiktok"
          ></b-input>
        </b-field>
         <b-field label="Instagram" :label-position="labelPosition">
          <b-input
            v-on:focusout.native="updateProfileGeneral"
            v-model="localSocial.instagram"
          ></b-input>
        </b-field>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Social',
  data: () => ({
    labelPosition: '',
    localSocial: ''
  }),
  created () {
    this.localSocial = this.$props.profile
  },
  props: {
    profile: Object
  },
  methods: {
    updateProfileGeneral () {
      const profile = {
        linkedin: this.localSocial.linkedin,
        twitter: this.localSocial.twitter,
        github: this.localSocial.github,
        tiktok: this.localSocial.tiktok,
        instagram: this.localSocial.instagram
      }
      this.$emit('updateProfileGeneral', profile)
    }
  }
}
</script>

<style>
</style>

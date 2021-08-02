<template>
  <div class="column">
    <div class="columns is-mobile">
      <div class="column is-full">
        <section>
          <b-field label="Add skills">
            <b-taginput
              v-model="localProfile.skills"
              ellipsis
              icon="label"
              placeholder="Add skills"
              aria-close-label="Delete this skill"
              @focusout.native="updateProfileGeneral"
              @keyup.13.native="updateProfileGeneral"
              @keyup.8.native="updateProfileGeneral"
              @click="updateProfileGeneral"
            >
            </b-taginput>
          </b-field>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data: () => ({
    labelPosition: '',
    skills: [],
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
        skills: this.localProfile.skills
      }
      this.$emit('updateProfileGeneral', profile)
    }
  }
}
</script>

<style>
</style>

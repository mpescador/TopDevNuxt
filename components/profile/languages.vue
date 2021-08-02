<template>
  <div>
    <form>
      <b-field label="Languages" :label-position="labelPosition">
        <b-select
          v-on:focusout.native="updateProfileGeneral"
          placeholder="Choose languages"
          expanded
          multiple
          native-size="8"
          v-model="profileUser.languages"
        >
          <option
            v-for="(country, idx) in languages"
            :key="idx"
            :value="country"
          >
            {{ country }}
          </option>
          <!--</optgroup>-->
        </b-select>
      </b-field>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Language',
  data: () => ({
    labelPosition: '',
    profileUser: {},
    selectedLanguages: [],
    languages: [
      'English',
      'French',
      'Spanish',
      'Arabic',
      'Mandarin',
      'Russian',
      'German',
      'Portuguese',
      'Japanese',
      'Hindi',
      'Malay',
      'Persian',
      'Swahili',
      'Tamil',
      'Italian',
      'Dutch',
      'Bengali',
      'Turkish',
      'Vietnamese',
      'Polish',
      'Javanese',
      'Punjabi',
      'Thai',
      'Korean'
    ]
  }),
  props: {
    profile: Object
  },

  methods: {
    updateProfileGeneral () {
      const profile = {
        languages: this.profileUser.languages
      }
      this.$emit('updateProfileGeneral', profile)
    }
  },
  created () {
    this.profileUser = this.$props.profile
  }
}
</script>

<style>
</style>

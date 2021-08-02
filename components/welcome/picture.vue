<template>
  <div>

    <form>

      <b-field label="Avatar Picture (url)">
        <b-input
          v-model="avatar"
        >
        </b-input>
      </b-field>
      <b-button class="mt-5 mr-3" type="is-secondary" @click="laststep">Previous</b-button>
      <b-button class="mt-5" type="is-primary" @click.prevent="updateUser">Next</b-button>

    </form>

  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    avatarp: {
      type: String
    }
  },
  data () {
    return {
      avatar: ''
    }
  },
  methods: {
    laststep () {
      this.$emit('laststep')
    },
    updateUser () {
      this.$emit('updateUserAvatar', 
        { 
          avatar: this.avatar
        })
    this.$root.$emit('isLogged')
    }
  },
  mounted () {
    this.avatar = this.avatarp
  }
}
</script>

<style>

</style>
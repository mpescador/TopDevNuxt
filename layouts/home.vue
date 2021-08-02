<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      // logged: this.$auth.loggedIn
    }
  },
  computed: {
    logged (context) {
      return context.$auth.loggedIn
    }
  }
}
</script>

<style>
</style>

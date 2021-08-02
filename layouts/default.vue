<template>
  <div>
    <Nuxt />
    <!-- <NavBar v-if="logged" /> -->
  </div>
</template>

<script>
// import NavBar from '@/components/navbar.vue'

export default {
  name: 'App',
  components: {
    // NavBar
  },
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
  // mounted () {
  //   let isAuthenticated = false
  //   let isUser = false

  //   // Check if user is authenticated
  //   if (localStorage.getItem('token')) { isAuthenticated = true } else { isAuthenticated = false }

  //   // Check if user is Admin
  //   if (localStorage.getItem('typeofuser') === 'User') { isUser = true } else { isUser = false }

  //   // Validate conditions
  //   if (isAuthenticated && isUser) { this.logged = true }

  //   this.$root.$on('isLogged', this.isLogged)
  //   this.$root.$on('notLogged', this.notLogged)
  // },
  // methods: {
  //   isLogged () { this.logged = true },
  //   notLogged () { this.logged = false }
  // }
}
</script>

<style scoped>
.title {
  font-size: 40px;
  margin-left: 15px;
  margin-top: 70px;
  margin-bottom: 40px !important;
}
</style>

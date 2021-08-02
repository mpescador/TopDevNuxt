<template>
  <div>
    <div>
      <b-navbar-item class="backId" tag="router-link" :to="{ path: '/login' }">
        <b-button class="back button is-light">Login</b-button>
      </b-navbar-item>
      <b-navbar-item class="backId" tag="router-link" :to="{ path: '/signup' }">
        <b-button class="back button is-light">Singup</b-button>
      </b-navbar-item>
      <div class="colum is mobile"></div>
      <div class="columns is-multiline is-desktop is-centered">
        <div class="column is-12 has-text-centered">
          <figure class="image is-256x256 is-inline-block">
            <img src="../assets/logotd.png" />
          </figure>
        </div>
        <div
          class="column is-12 has-text-centered has-text-info-dark is-size-4"
        >
          <p>Get instant help from top developers</p>
        </div>
      </div>
      <div class="column is mobile">
        <input
          class="input is-rounded column is-half is-offset-one-quarter fa-home"
          type="text"
          placeholder="java,css,html..."
          v-model="txtSearchHome"
          @keyup.13="search"
        />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data: () => ({
    txtSearchHome: '',
    showListing: false
  }),
  components: {
  },
  methods: {
    search () {
      sessionStorage.setItem('txtSearchDev', this.txtSearchHome)
      this.$router.push('/listing')
    }
  },
  mounted () {
    sessionStorage.setItem('txtSearchDev', '')
  }
}
</script>

<style scoped>
.backId {
  display: inline-block !important;
  margin-bottom: 30px;
  float: right;
  margin-top: 10px;
}
</style>

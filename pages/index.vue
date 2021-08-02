<template>
  <div>
    <img src="/bg_topDev_op.jpg" alt="fsd" class="fondo">

    <div class="is-align-items-center is-flex-direction-column is-flex is-justify-content-space-between homewrapper">
      <div class="nav">
        <div class="login" v-if="!logged">
          <b-button id="loginButton" class="back button is-light boton is-rounded" tag="router-link" :to="{ path: '/login' }">
            Login
          </b-button>
          <b-button id="signupButton" class="back button is-light boton is-rounded" tag="router-link" :to="{ path: '/signup' }">
            Sign up
          </b-button>
        </div>
        <div class="login" v-if="logged">
          <b-button id="profileButton" class="back button is-light boton is-rounded" tag="router-link" :to="{ path: '/panel/profile' }">
            Profile
          </b-button>
          <b-button id="logoutButton" @click="logout" class="back button is-light boton is-rounded">
            Logout
          </b-button>
        </div>
      </div>
      <div class="logo">
        <img src="/logo_topDev.png" alt="logo" class="logo-img">
        <p class="subtitle">
          Get instant help from top developers
        </p>
      </div>
      <div class="search">
       <b-field>
          <b-input
            v-model="txtSearchHome"
            type="search"
            placeholder="java,css,html..."
            icon="magnify"
            icon-clickable
            @keyup.13.native="search"
            @icon-click="search"
            rounded
            :autofocus="true"
          >
          </b-input>
        </b-field>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // auth: false,
  components: {
  },
  layout: 'home',
  data: () => ({
    txtSearchHome: '',
    showListing: false
  }),
  mounted () {
    sessionStorage.setItem('txtSearchDev', '')
  },
  computed: {
    logged (context) {
      return context.$auth.loggedIn
    }
  },
  methods: {
    async logout () {
      console.log('logout')
      await this.$auth.logout()
      this.$auth.$storage.removeUniversal('email')
      this.$auth.$storage.removeUniversal('token')
      this.$auth.$storage.removeUniversal('typeofuser')
      // window.localStorage.clear()
    },
    search () {
      sessionStorage.setItem('txtSearchDev', this.txtSearchHome)
      this.$router.push('/listing')
    }
  }
}
</script>

<style scoped>
#loginButton, #profileButton {
  background: #fff0;
  border: #ffffff solid 1px;
  color: white;
}
#signupButton, #logoutButton {
  background: linear-gradient(to right, #48c78e, #48c78e);
  color: #ffffff;
}
.fondo {
  object-fit: cover;
  height:100vh;
  width: 100%;
  max-width: unset;
  position: fixed;
  z-index: -1;
}
.homewrapper {
  height: 80vh;
}
.nav {
  width: 100vw;
  margin-right: 20px;
}
.search {
  width: 70%;
  max-width: 380px;
  height: 10%;
}
.login  {
  width: 280px;
    float: right;
    margin-top: 11px;
}
.logo {
  width: 70%;
  max-width: 380px;
  height: 270px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.logo-img {
  margin: auto;
  width: 235px;
    height: 165px;
}
.subtitle {
  color: #ffffff;
    font-size: 23px;
    font-weight: 300;
    bottom: 0;
    text-align: center;
    margin-bottom: -5px;
    margin-top: 15px;
}
.boton{
  background: linear-gradient(to right, #1382E0, #4945D0);
  color: white;
  border: none;
  margin-left: 15px;
  width:120px
}
.profile {
  margin-left: 120px;
}
</style>

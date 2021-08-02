<template>
  <b-navbar
    :mobile-burger="false"
    :fixed-bottom="mobile"
    :fixed-top="!mobile"
    shadow
  >
    <template #start class="is-justify-content-space-evenly">
      <b-navbar-item
        tag="nuxt-link"
        to="/panel/profile"
        width="30"
        heigth="30"
        active
      >
        <img
          :src="require('@/assets/profile.svg')"
          alt="Profile"
          style="max-width:unset; max-height:unset; height:35px;"
        >
      </b-navbar-item>

      <b-navbar-item
        style=""
        tag="nuxt-link"
        to="/panel/money"
      >
        <img
          :src="require('@/assets/money.svg')"
          alt="Money"
          style="max-width:unset; max-height:unset; height:35px;"
        >
      </b-navbar-item>

      <b-navbar-item
        style=""
        tag="nuxt-link"
        to="/panel/calendar"
      >
        <img
          :src="require('@/assets/calendar.svg')"
          alt="Calendar"
          style="max-width:unset; max-height:unset; height:35px;"
        >
      </b-navbar-item>

      <b-navbar-item
        style=""
        tag="nuxt-link"
        to="/listing"
      >
        <img
          :src="require('@/assets/listing.svg')"
          alt="Home"
          style="max-width:unset; max-height:unset; height:35px;"
        >
      </b-navbar-item>
      <!-- <router-link to="/money">
        <b-navbar-item href="#">
            Money
        </b-navbar-item>
      </router-link>

      <router-link to="/calendar">
        <b-navbar-item href="#">
            Calendar
        </b-navbar-item>
      </router-link>

      <router-link to="/listing">
        <b-navbar-item href="#">
            Listing
        </b-navbar-item>
      </router-link> -->
    </template>
  </b-navbar>
</template>

<script>

export default {
  ssr: false,
  name: 'NavBar',
  components: {
  },
  data () {
    return {
      mobile: true
      // width: ''
    }
  },
  mounted () {
    // eslint-disable-next-line nuxt/no-globals-in-created
    window.addEventListener('resize', this.myEventHandler)
  },
  destroyed () {
    window.removeEventListener('resize', this.myEventHandler)
  },
  methods: {
    myEventHandler (e) {
      if (window.innerWidth > 700) {
        this.mobile = false
      } else {
        this.mobile = true
      }
    }
  }
}

</script>

<style scoped>
@media screen and (min-width: 200px) {
  .navbar-start {
    justify-content: space-evenly !important;
    width: 100% !important;
  }
}

</style>

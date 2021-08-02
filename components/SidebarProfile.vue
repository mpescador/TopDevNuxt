<template>
  <div>
    <div>
    <!-- <b-button @click="open = true">Menu</b-button> -->
    </div>
    <div class="sidebar-page">
      <section class="sidebar-layout">
        <b-sidebar
          v-model="open"
          position="static"
          :fullheight="fullheight"
          :right="right"
          expand-with-delay="expandWithDelay"
        >
          <div>
            <nuxt-link to="/">
              <div class="main-logo">
                <b-image
                  :src="require('@/static/logoazul.png')"
                  alt="TopDev Logo"
                  class="logo-img"
                />
              </div>
            </nuxt-link>
            <b-menu class="is-custom-mobile">
              <b-menu-list label="PROFILE">
                <!-- <b-menu-item active expanded icon="settings" label="Profile"> -->
                <b-menu-item label="Home" @click="changeHome" />
                <b-menu-item label="General" @click="changeOption('showGeneralInformation')" />
                <b-menu-item label="Contact Info" @click="changeOption('showContactInfo')" />
                <b-menu-item label="Experience" @click="changeOption('showExperience')" />
                <b-menu-item label="Skills" @click="changeOption('showSkills')" />
                <b-menu-item label="Languages" @click="changeOption('showLanguages')" />
                <b-menu-item label="Education" @click="changeOption('showEducation')" />
                <b-menu-item label="Social" @click="changeOption('showSocial')" />
                <b-menu-item label="Booking Types" @click="changeOption('showDuration')" />
                <b-menu-item label="Calendar" @click="changeOption('showCalendar')" />
                <!-- </b-menu-item> -->
              </b-menu-list>
              <b-menu-list label="Actions">
                <b-menu-item icon="logout" label="Logout" @click="logout" />
              </b-menu-list>
            </b-menu>
          </div>
        </b-sidebar>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      expandOnHover: true,
      expandWithDelay: true,
      mobile: 'Fullwidth',
      reduce: false,
      open: true,
      overlay: true,
      fullheight: true,
      fullwidth: false,
      right: false
    }
  },
  methods: {
    changeOption (option) {
      this.open = true
      this.$emit('changeOption2', option)
    },
    logout () {
      this.$emit('logout')
    },
    changeHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.main-logo {
  height:180px;
}
.logo-img {
  width: 150px;
  margin-left: 50px;
  padding-top: 50px;
}
.menu, .is-custom-mobile {
  height: 100vh !important;
  margin-left: 30px;
}
a {
    color: linear-gradient(to right, #1382E0, #4945D0);
    cursor: pointer;
    text-decoration: none;
    text-decoration-line: none;
    text-decoration-thickness: initial;
    text-decoration-style: initial;
    text-decoration-color: initial;
}
.menu-list a.is-active {
    background-color: #485fc7;
    color: #fff;
}
.button {
    background: linear-gradient(to right, #1382E0, #4945D0);
    border-width: 1px;
    color: #ffffff;
    cursor: pointer;
    justify-content: center;
    padding-bottom: calc(0.5em - 1px);
    padding-left: 1em;
    padding-right: 1em;
    padding-top: calc(0.5em - 1px);
    text-align: center;
    white-space: nowrap;
    border-radius: 30px;
}
.check{
    background-color: #1382E0;
}
</style>

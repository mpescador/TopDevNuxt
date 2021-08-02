<template>
  <div>
    <p class="title">
      Welcome
    </p>

    <Contact
      v-if="step === 1"
      :emailp="email"
      :supportlangp="supportlang"
      :phonep="phone"
      @updateUserContact="updateUser"
      @nextstep="nextstep"
    />

    <About
      v-if="step === 2"
      :countryoriginp="countryorigin"
      :dateofbirthp="dateofbirth"
      @updateUserAbout="updateUser"
      @laststep="laststep"
      @nextstep="nextstep"
    />

    <Picture
      v-if="step === 3"
      :avatarp="avatar"
      @updateUserAvatar="updateUser"
      @laststep="laststep"
    />
  </div>
</template>

<script>
import UserService from '@/services/UserService'
import Contact from '@/components/welcome/contact.vue'
import About from '@/components/welcome/about.vue'
import Picture from '@/components/welcome/picture.vue'

export default {
  ssr: false,
  name: 'Welcome',
  components: {
    Contact,
    About,
    Picture
  },
  data () {
    return {
      step: 1,
      email: '',
      supportlang: 'English',
      phone: '',
      countryorigin: '',
      dateofbirth: new Date(),
      avatar: ''
    }
  },
  created () {
    this.email = this.$auth.email
  },
  methods: {
    nextstep () {
      this.step++
    },
    laststep () {
      this.step--
    },
    async updateUser (e) {
      console.log(e)
      const userData = {}

      if (e.email) {
        this.email = e.email
        userData.email = this.email
      }
      if (e.supportlang) {
        this.supportlang = e.supportlang
        userData.supportlang = this.supportlang
      }

      if (e.phone) {
        this.phone = e.phone
        userData.phone = this.phone
      }

      if (e.countryorigin) {
        this.countryorigin = e.countryorigin
        userData.countryorigin = this.countryorigin
      }

      if (e.dateofbirth) {
        this.dateofbirth = e.dateofbirth
        userData.dateofbirth = this.dateofbirth
      }

      if (e.avatar) {
        this.avatar = e.avatar
        userData.avatar = this.avatar
      }

      console.log('-->', userData)

      const response = await UserService.updateUser(userData)
      if (this.step === 3) { this.$router.push('/profile') }
      this.step++
      console.log(response)
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 40px;
  margin-left: 15px;
  margin-top: 70px;
  margin-bottom: 40px !important;
  color: #8c67ef;
}

</style>

<template>
  <div class="container">
    <div>
      <SidebarProfile @changeOption2="changeOption2" @logout="logout" />
    </div>
    <div class="p-1 item">
      <General v-if="show.showGeneralInformation" :user="user" :profile="profile" @updateUserGeneral="updateUserGeneral" @updateProfileGeneral="updateProfileGeneral" />
      <ContactInfo v-else-if="show.showContactInfo" :user="user" @updateContactInfo="updateContactInfo" />
      <Languages v-else-if="show.showLanguages" :profile="profile" @updateProfileGeneral="updateProfileGeneral" />
      <Experience v-else-if="show.showExperience" :profile="profile" @updateProfileGeneral="updateProfileGeneral" />
      <Education v-else-if="show.showEducation" :profile="profile" @updateProfileGeneral="updateProfileGeneral" />
      <Social v-else-if="show.showSocial" :profile="profile" @updateProfileGeneral="updateProfileGeneral" />
      <Skills v-else-if="show.showSkills" :profile="profile" @updateProfileGeneral="updateProfileGeneral" />
      <Duration v-else-if="show.showDuration" :booking-types="bookingTypes" @deleteBookingTypes="deleteBookingTypes" @updateBookingTypes="updateBookingTypes" />
      <Calendar v-else-if="show.showCalendar" :client-bookings-props="clientBookingsProps" :professional-bookings-props="professionalBookingsProps" />
    </div>
  </div>
</template>

<script>

import General from '@/components/profile/general.vue'
import ContactInfo from '@/components/profile/contactinfo.vue'
import Languages from '@/components/profile/languages.vue'
import Experience from '@/components/profile/experience'
import Education from '@/components/profile/education'
import Social from '@/components/profile/social'
import Skills from '@/components/profile/skills'
import Duration from '@/components/profile/duration'
import Calendar from '@/components/profile/calendar'

export default {
  name: 'Profile',
  components: {
    General,
    ContactInfo,
    Languages,
    Experience,
    Education,
    Social,
    Skills,
    Duration,
    Calendar
  },
  middleware: 'auth',
  async asyncData (context) {
    const axios = context.$axios
    console.log(context)
    const profile = await axios.$get('profiles/current',
      {
        headers: { token: context.$auth.$storage.getUniversal('token') }
      })
    const user = await axios.$get('users/user',
      {
        headers: { token: context.$auth.$storage.getUniversal('token') }
      })
    const bookingTypes = await axios.$get(`bookingtypes/${profile._id}`,
      {
        headers: { token: context.$auth.$storage.getUniversal('token') }
      })
    const professionalBookingsProps = await axios.$get('bookings/professional',
      {
        headers: { token: context.$auth.$storage.getUniversal('token') }
      })

    const clientBookingsProps = await axios.$get('bookings/client',
      {
        headers: { token: context.$auth.$storage.getUniversal('token') }
      })
    bookingTypes.profileId = profile._id
    return { profile, user, bookingTypes, professionalBookingsProps, clientBookingsProps }
  },
  data: () => ({
    user: {},
    profile: {},
    bookingTypes: [],
    optionSelected: 'generalInformation',
    showGeneral: true,
    show: {
      showGeneralInformation: true,
      showContactInfo: false,
      showLanguages: false,
      showExperience: false,
      showEducation: false,
      showSocial: false,
      showSkills: false,
      showDuration: false,
      showCalendar: false
    }
  }),
  mounted () {
    if (this.$route.query.option === 'calendar') {
      this.changeOption2('showCalendar')
    }
  },
  methods: {
    async logout () {
      await this.$auth.logout()
      this.$auth.$storage.removeUniversal('email')
      this.$auth.$storage.removeUniversal('token')
      this.$auth.$storage.removeUniversal('typeofuser')
      this.$auth.$storage.removeUniversal('id')
    },
    async updateUserGeneral (user) {
      try {
        await this.$axios.$post('/users/update', user,
          {
            headers: { token: this.$auth.$storage.getUniversal('token') }
          })
        this.notification()
      } catch (err) {
        console.log('error updating user', err)
      }
    },
    async updateProfileGeneral (profile) {
      try {
        await this.$axios.$post('profiles/current', profile,
          {
            headers: { token: this.$auth.$storage.getUniversal('token') }
          })
        this.notification()
      } catch (err) {
        console.log('error updating profile', err)
      }
    },
    async updateContactInfo (user) {
      try {
        await this.$axios.$post('users/update', user,
          {
            headers: { token: this.$auth.$storage.getUniversal('token') }
          })
        this.notification()
      } catch (err) {
        console.log('error updating profile', err)
      }
    },
    async deleteBookingTypes (id) {
      const url = `bookingtypes/${id}`
      try {
        await this.$axios.$delete(url, {
          headers: {
            token: this.$auth.$storage.getUniversal('token')
          }
        })
      } catch (err) {
        console.log('error updating booking type', err)
      }
      this.notification()
    },
    async updateBookingTypes (bookingType) {
      try {
        await this.$axios.$put('bookingtypes', bookingType,
          {
            headers: { token: this.$auth.$storage.getUniversal('token') }
          })
        this.notification()
      } catch (err) {
        console.log('error updating booking type', err)
      }
    },
    changeOption () {
      for (const property in this.show) {
        const optionSelected = 'show' + this.optionSelected.charAt(0).toUpperCase() + this.optionSelected.slice(1)
        console.log(property, optionSelected)
        if (property === optionSelected) {
          this.show[property] = true
        } else {
          this.show[property] = false
        }
      }
    },
    changeOption2 (option) {
      for (const property in this.show) {
        const optionSelected = option // 'show' + this.optionSelected.charAt(0).toUpperCase() + this.optionSelected.slice(1)
        console.log(property, optionSelected)
        if (property === optionSelected) {
          this.show[property] = true
        } else {
          this.show[property] = false
        }
      }
    },
    notification () {
      this.$buefy.toast.open({
        duration: 1000,
        message: 'Saved!',
        position: 'is-top-right',
        type: 'is-success'
      })
    }
  }
}
</script>

<style scoped>
.sectionTitle {
  font-family: Roboto, Arial, sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #4945d0;
  margin-top: 17px;
  margin-left: 15px;
  display: inline-block;
}
.logout {
  float: right;
  margin-right: 5px;
  margin-top: 5px;
}
.menuProfile {
  margin-right: 25px;
  margin-left: 25px;
}
.top {
  /* border-bottom: 1px solid rgb(233, 233, 233); */
  height: 68px;
  background-color: #ffffff;
  position: fixed;
  z-index: 5;
  width: 100%;
  top: 0;
}
.p-1 {
  padding: 1em;
}

.container {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  max-width:unset !important;
}
.item {
  flex-grow: 1; /* default 0 */
  max-width: 450px;
  margin-top: 60px;
  margin-left: 120px;
}
</style>

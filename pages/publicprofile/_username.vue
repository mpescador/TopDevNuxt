<template>
  <div>
    <PublicProfile :profile="profile" v-if="sw" />
  </div>
</template>

<script>
export default {
  data: () => ({
    profile: {},
    sw: false
  }),
  components: {},
  async created () {
    const url = `/profiles/${this.$route.params.username}`
    try {
      this.profile = await this.$axios.$get(url)
      const urlBookingTypes = `/bookingtypes/${this.profile.profile._id}`
      const bookingTypes = await this.$axios.$get(urlBookingTypes)
      this.profile.bookingTypes = bookingTypes
      console.log(this.profile)
      this.sw = true
    } catch (err) {
      console.log(err)
      this.$router.push('/listing')
    }
  }
}
</script>

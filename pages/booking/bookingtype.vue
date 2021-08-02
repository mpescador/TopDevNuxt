<template>
  <div>
    <div class="columns is-mobile">
      <div class="column is-three-fifths is-offset-one-fifth">
        <div
          class="
        book
        is-align-items-center
        is-flex-direction-column
        is-flex
        is-justify-content-space-between
        homewrapper
      "
        >
    <figure class="image is-128x128">
      <img :src="profile.avatar" alt="Placeholder" class="avatar">
    </figure>
          <h1 class="th1">
            Duration
          </h1>
          <p class="p">
            Select the time you want to hire
          </p>
          <div
            v-for="(bookingType, idx) in bookingTypes"
            :key="idx"
            class="buttons"
          >
            <b-button
              class="btnb"
              type="is-rounded"
              @click.prevent="selectBookingType(bookingType._id, bookingType.duration, bookingType.price)"
            >
              {{ bookingType.duration }} min  /  {{ bookingType.price }} €
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  ssr: false,
  data: () => ({
    bookingTypes: [],
    booking: {},
    profile: {}
  }),
  mounted () {
    const retrievedObject = localStorage.getItem('profile')
    const p = JSON.parse(retrievedObject)
    let url = ''
    console.log('<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>> ----> ', p)
    if (this.$route.params !== undefined) {
      if (p === null) {
        this.$router.push('/')
      }
      this.profile = p
      url = `/bookingtypes/${p.profile._id}`
      this.booking = {
        devId: p.profile._id,
        userId: this.$auth.$storage.getLocalStorage('id'),
        supportLang: p.supportlang,
        idUserProfessional: p._id
      }
    } else {
      url = `/bookingtypes/${this.$route.params.profile.profile._id}`
      this.profile = this.$route.params.profile
      this.booking = {
        devId: this.$route.params.profile._id,
        userId: this.$auth.$storage.getLocalStorage('id'),
        supportLang: this.$route.params.profile.supportlang,
        idUserProfessional: this.$route.params.profile._id
      }
    }
    this.$axios
      .$get(url)
      .then((response) => {
        this.bookingTypes = response
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    selectBookingType (id, duration, price) {
      console.log('<<<<<<<<<<>>>>>>>>>>>>>>>>> AQUI ====> ', this.profile)
      console.log('supportlang => ', this.booking)
      this.booking.bookingTypeId = id
      this.booking.duration = duration
      this.booking.price = price
      this.booking.firstNameProfessional = this.profile.firstname
      this.booking.lastNameProfessional = this.profile.lastname
      localStorage.setItem('booking', JSON.stringify(this.booking))
      this.$router.push({ name: 'booking-datetime', params: { booking: this.booking } })
    }
  }
}
</script>
<style scoped>
.book{
  margin-top: 100px;
}
.btnb{
 background: linear-gradient(to right, #1382E0, #4945D0);
  color: white;
  border: none;
  margin-top: 0px;
  width:300px;
  height: 50px;
}
.th1{
  font-size: 300%;
}
.p {
  margin-bottom: 50px;
}
.avatar{
  border-radius: 50%;
}

</style>

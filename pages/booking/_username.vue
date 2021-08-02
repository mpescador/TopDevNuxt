<template>
<div>
  <div>
  </div>
  <div v-if="sw">
    <div class="columns is-mobile">
      <div class="column">
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
            Language
          </h1>
          <p class="p">
            Select the language for the session
          </p>
          <b-select
            v-model="optionSelected"
            placeholder="Select a language   "
            style="margin-bottom:60px;"
            @change.native="changeOption"
          >
            <option
              v-for="(language, idx) in profile.profile.languages"
              :key="idx"
              :value="language"
            >
              {{ language }}
            </option>
          </b-select>
          <div class="contbtn">
            <nuxt-link
              class="btnnext"
              :to="{ name: 'booking-bookingtype', params: { profile: profile } }"
            >
              Next
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  middleware: 'auth',

  data: () => ({
    profile: {},
    sw: false,
    swNext: false,
    optionSelected: null
  }),

  created () {
    const url = `/profiles/${this.$route.params.username}`
    this.$axios
      .$get(url)
      .then((response) => {
        this.profile = response
        console.log('<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>> PROFILE ====> ', this.profile)
        this.sw = true
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    changeOption () {
      this.profile.supportlang = this.optionSelected
      localStorage.setItem('profile', JSON.stringify(this.profile))
      const retrievedObject = localStorage.getItem('profile')
      console.log('retrievedObject: ', JSON.parse(retrievedObject))
      this.swNext = true
    }
  }
}
</script>

<style scoped>
.book{
  margin-top: 100px;
}
.th1{
  font-size: 300%;
}
.p {
  margin-bottom: 50px;
}
.stlogo{
max-width: 400px;
margin-top: 20%;
text-align: center;
}
.btnnext{
  display: flex;
    flex-wrap: wrap;
    margin-top: 9px;
    color: white;
    border: none;
    width: 120px;
    margin-left: 68px;
    margin-bottom: 35px;
    font-size: 20px;
}
.contbtn{
  margin-top: 35px;
    width:200px;
    background: linear-gradient(to right, #1382E0, #4945D0);
    border-radius: 38px;
    height: 50px;
}
select {
  width: 260px !important;
}
.avatar{
  border-radius: 50%;
}

</style>

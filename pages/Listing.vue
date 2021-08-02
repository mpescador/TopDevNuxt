<template>
  <div class="fondo">
    <div class="top-bar">
      <b-field
        style="max-width: 950px;
    margin: auto;"
      >
        <router-link
          class="logo"
          to="/"
        >
          <img src="/logoazul.png" alt="home">
        </router-link>
        <div>
          <b-input
            v-model="txtSearchDev"
            class="search"
            type="search"
            placeholder="java,css,html..."
            clearable
            icon="magnify"
            icon-clickable
            rounded
            @icon-click="filterSearch"
            @input="filterSearch"
          />
        </div>
      </b-field> <!-- COMPUTED en la busqueda -->
    </div>

    <div class="title">
      <p class="">
        Specialist in: {{ txtSearchDev }}
      </p>
    </div>

    <div class="listingContainer">
      <CardProfileN v-for="(profile, idx) in profiles" :key="idx" class="card" :profile="profile" />
    </div>
  </div>
</template>

<script>
// import cardProfile from "../components/listing/cardProfile.vue";
export default {
  async asyncData ({ $axios }) {
    const profiles = await $axios.$get('/profiles')
    return { profiles }
  },
  data: () => ({
    profiles: [],
    allProfiles: [],
    txtSearchDev: ''
  }),
  mounted () {
    // this.profiles = this.$props.profileList
    this.allProfiles = this.profiles
    if (sessionStorage.getItem('txtSearchDev') !== '') {
      this.txtSearchDev = sessionStorage.getItem('txtSearchDev')
      this.filterSearch()
    }
    // else {
    //   this.txtSearchDev = this.$props.txtSearchHome
    //   if (this.txtSearchDev !== undefined) {
    //     this.filterSearch()
    //   }
    // }
  },
  methods: {
    filterSearch () {
      sessionStorage.setItem('txtSearchDev', this.txtSearchDev)
      if (this.txtSearchDev.length > 0) {
        const newArray = this.allProfiles.filter((el) => {
          return el.skills
            .toString()
            .toLowerCase()
            .includes(this.txtSearchDev.toLowerCase())
        })
        this.profiles = newArray
      } else {
        this.profiles = this.allProfiles
      }
    }
  }
}
</script>

<style scoped>
.listingContainer {
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 980px;
  margin: auto;
  margin-top: 20px;
}
.logo{
  width: 80px;
  height: 40px;
  margin: 15px;
  margin-top: 20px;
}
.search{
  margin: 15px;
  width: 80vw;
  display: inline-block;
  max-width: 770px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.top-bar {
    background-color: white;
    position: fixed;
    width: 100vw;
    z-index: 2;
    top: 0;
}
.title {
  margin-top:120px;
  height:80px;
}
.title p {
  text-align: center;
}
</style>

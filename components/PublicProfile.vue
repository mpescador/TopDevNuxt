<template>
  <div class="columns is-mobile">
    <div class="column is-half is-offset-one-quarter texto">
      <b-navbar centered>
        <template #brand>
          <span class="back">
            <a class="after is-rounded" @click="$router.go(-1)">&lt; Back </a>
          </span>
        </template>
        <template #start>
          <div class="columns is-mobile">
            <div class="column is-half is-offset-one-quarter" />
          </div>
          <!-- <b-navbar-item class="colunm is-half is-offset-one-quarter">
            <span class="name is-size-3 is-primary">{{ profile.profile.name }}</span>
          </b-navbar-item> -->
        </template>
      </b-navbar>
      <div class="">
        <div class="video">
          <LazyYoutube ref="youtubeLazyVideo" :src="profile.profile.profilevideo" max-width="720px" aspect-ratio="16:9" thumbnail-quality="standard" />
        </div>
      </div>
      <br>
      <br>
      <span class="name is-size-3">{{ profile.profile.name }}</span>
      <div>
        <div>
          <p class="description">
            {{ profile.profile.description }}
          </p>
          <br>
          <div>
            <span v-for="(skill, idx) in profile.profile.skills" :key="idx" class="tag is-link is-rounded is-light is-medium">
              {{ skill }}
            </span>
          </div>
          <br>
          <br>
          <br>
          <div>
            <h2 class="has-text-link tittle">
              <b>Education</b>
            </h2>
            <p>{{ profile.profile.education }}</p>
            <hr>
          </div>
          <th />
          <div class="last-section">
            <h2 class="has-text-link tittle">
              <b>Experience</b>
            </h2>
            <p>{{ profile.profile.experience }}</p>
            <hr>
          </div>
          <div class="cta">
            <div class="buttons">
              <b-field v-if="profile.bookingTypes.length > 0" :label="'Starting from ' + profile.bookingTypes[0].price +' € / ' + profile.bookingTypes[0].duration + ' min'">
              </b-field>
              <b-button type="is-primary" class="btnbooking is-rounded" tag="router-link" :to="`/booking/${profile.username}`">
                  Book now
                </b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LazyYoutube } from 'vue-lazytube'

export default {
  components: {
    LazyYoutube
  },
  props: {
    profile: Object
  },
  data: () => ({
    publicProfile: {}
  }),
  mounted () {
    this.publicProfile = this.$props.profile
  },
  created () {
    this.publicProfile = this.$props.profile
  }
}
</script>

<style scoped>
.last-section {
  margin-bottom: 150px;
}
.label{
  font-size: 20px;
    font-weight: 300;
    margin-top: 13px;
}
.cta {
  background-color: #efefef;
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 70px;
}
.buttons {
  max-width: 630px;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.back {
    height: 78px;
    width: 130px;
    border-radius: 100px;
    margin-top: 19%;
}
#backId {
  background-color: #fff;
}
.name{
  color: #485fc7 !important
}
.after{
  font-size: 24px;
  width: 150px;
  color: black;
}
.tittle{
  font-size: 20px;
}
.tag{
  color: blue;
  margin-right: 15px;
}
.video{
align-content: center;
}
.texto{
max-width: 50%;
}
.name{
  align-items: center;
    display: flex;
    color: rgb(44, 23, 230);
}
.btnbooking{
 background: linear-gradient(to right, #1382E0, #4945D0);
  color: white;
  border: none;
  margin-top: 15px;
  width:120px
}
.description {
  font-size: 18px;
  margin-bottom: 15px;
}
</style>

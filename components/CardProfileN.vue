<template>
  <div>
    <div>
      <nuxt-link class="pp" :to="`/publicprofile/${profile.user_id.username}`">
        <div class="columns is-mobile card-content">
          <div>
            <div class="media-left">
              <figure class="image is-128x128">
                <img :src="profile.user_id.avatar" alt="Placeholder image" class="image">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">
                {{ profile.name }}
              </p>
              <p v-if="profile.description !== undefined" class="subtitle is-6">
                {{ profile.description.substr(0, 125).concat(" ", "...") }}
              </p>
              <div class="skills">
                <span v-for="(skill, idx) in profile.skills" :key="idx">
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    profile: Object
  }
}
</script>

<style scoped>
.card {
  background-color: white;
    border-radius: 10px;
    box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0px 0 1px rgb(10 10 10 / 2%);
    color: #4a4a4a;
    width: 280px;
    height: 370px;
    margin: 15px 15px 15px 15px;
}
.image{
  border-radius: 50%;
  border-radius: 50%;
  margin-left: 26px;

}
.title{
height: 32px;
width: 200px;
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
margin-left: 45px;
margin-top: 28px;
margin-bottom: 25px !important;
}
.subtitle{
height: 35px;
    width: 210px;
    margin-left: 35px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px !important;

}
.pp{
color: #8c67ef;
cursor: pointer;
text-decoration: none;
bottom: 65px;
margin-left: 68px;
}
.skills{
font-size: 14px;
    margin: auto;
    width: 190px;
    text-align: center;
}

</style>

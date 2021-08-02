<template>
  <div class="main">
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
          <h1 class="th1">
            Booking confirmed
          </h1>
          <p class="p">
            Your payment has been successfully processed.
          </p>
          <br>
          <div>
            <b-button
              rounded
              class="calltoaction"
            >
              <b-icon
                icon="calendar"
                style="margin-right:8px;"
              />
              Add to calendar
            </b-button>
            <br>
            <b-button
              rounded
              class="calltoaction"
            >
              <b-icon
                icon="video-box"
                style="margin-right:8px;"
              />
              Zoom meeting
            </b-button>
            <br>
            <b-button
              rounded
              class="calltoaction"
            >
              <nuxt-link
                class="calltoaction"
                :to="{ name: 'panel-profile', query: { option: 'calendar'} }"
              >
                <b-icon
                  icon="account"
                  style="margin-right:8px;"
                />
                Go to my profile
              </nuxt-link>
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}

// this.$router.push('/panel/profile?option=calendar')
</script>

<style scoped>
.main {
  background: linear-gradient(to right, #1382E0, #4945D0);
  height: 101vh;
}
.book{
  margin-top: 100px;
}
.th1{
  font-size: 300%;
  color:white;
}
.p {
  margin-bottom: 50px;
  color: white;
  max-width: 450px;
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
.select select {
  width: 260px !important;
}
.calltoaction {
  margin-top: 35px;
    width:200px;
    background: white;
    border-radius: 38px;
    height: 50px;
    color: #4945D0;
}
.ctabtn {
    display: flex;
    flex-wrap: wrap;
    margin-top: 9px;
    color: #4945D0;
    border: none;
    width: 120px;
    margin-left: 68px;
    margin-bottom: 35px;
    font-size: 20px;
}
</style>

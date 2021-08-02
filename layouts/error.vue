<template>
  <div>
    <img src="/bg_topDev_op.jpg" alt="fsd" class="fondo">

    <div class="is-align-items-center is-flex-direction-column is-flex is-justify-content-space-between homewrapper">
      <div class="logo">
        <img src="/logo_topDev.png" alt="logo" class="logo-img">
        <p class="subtitle">
          404
        </p>
        <p class="subtitle">
          ARE YOU LOST???
        </p>
      </div>
    </div>
    </div>
</template>

<style scoped>
#loginButton {
  background: #fff0;
  border: #ffffff solid 1px;
  color: white;
}
#signupButton, #profileButton {
  background: linear-gradient(to right, #48c78e, #48c78e);
  color: #ffffff;
}
.fondo {
  object-fit: cover;
  height:100vh;
  width: 100%;
  max-width: unset;
  position: fixed;
  z-index: -1;
}
.homewrapper {
  height: 80vh;
}
.nav {
  width: 100vw;
  margin-right: 20px;
}
.search {
  width: 70%;
  max-width: 380px;
  height: 10%;
}
.login  {
  width: 280px;
    float: right;
    margin-top: 11px;
}
.logo {
  width: 70%;
  max-width: 380px;
  height: 270px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
}
.logo-img {
  margin: auto;
  width: 235px;
    height: 165px;
}
.subtitle {
  color: #ffffff;
    font-size: 23px;
    font-weight: 300;
    bottom: 0;
    text-align: center;
    margin-bottom: -5px;
    margin-top: 15px;
}
.boton{
  background: linear-gradient(to right, #1382E0, #4945D0);
  color: white;
  border: none;
  margin-left: 15px;
  width:120px
}
</style>

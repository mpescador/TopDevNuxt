<template>
  <div>
    <router-link
      class="exit"
      to="/"
    >
      X
    </router-link>
    <div class="columns is-mobile">
    <div class="column is-half is-offset-one-quarter">
      <div class="interior column is-half is-offset-one-quarter">
        <div class="title">
     <p>
      Login
    </p>
        </div>
    <form
      style="max-width: 280px;"
    >
      <b-field label="Email">
        <b-input
          v-model="email"
          placeholder="youremail@something.com"
          type="email"

        />
      </b-field>

      <b-field class="mt-4" label="Password">
        <b-input
          v-model="password"
          type="password"

        />
      </b-field>
      <b-button class="boton mt-4 is-rounded"  @click.prevent="login">
        Login
      </b-button>
      <b-button class="mt-4 boton" type="is-rounded" @click.prevent="signup">
        Sign up
      </b-button>
    </form>
      </div>

    </div>
    </div>
  </div>
</template>

<script>
// import UserService from '@/services/UserService'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  mounted () {
    if (localStorage.getItem('token')) { this.$router.push('/panel') }
  },
  methods: {
    async login () {
      const data = await this.$auth.loginWith('local', {
        data: {
          email: this.email,
          password: this.password
        }
      })
      console.log('Logged In!', data, this.$auth)
      this.$auth.$storage.setUniversal('email', data.data.email)
      this.$auth.$storage.setUniversal('token', data.data.token)
      this.$auth.$storage.setUniversal('typeofuser', data.data.typeofuser)
      this.$auth.$storage.setUniversal('id', data.data.id)
    },
    signup () {
      this.$router.push('/signup')
    }
    // async login () {
    //   const response = await this.$axios.$post('/auth/login', {
    //     email: this.email,
    //     password: this.password
    //   })
    //   console.log(response)
    //   if (response.token !== undefined) {
    //     localStorage.token = response.token
    //     localStorage.email = response.email
    //     localStorage.typeofuser = response.typeofuser
    //     console.log(response.token)
    //     this.$root.$emit('isLogged')
    //     this.$router.push('/panel/profile')
    //   } else {
    //     window.alert(response.error)
    //   }
    // }
  }
}
</script>

<style scoped>
.boton{
  background: linear-gradient(to right, #1382E0, #4945D0);
  color: white;
  border: none;
  margin-top: 15px;
  width:120px;
}
.card{
  margin-top: 100px;
}
.ex{

  color: rgb(89, 49, 249);
  border: none;
}
.exit{
    font-size: 20px;
    position: absolute;
    top: 10px;
    right: 15px;
}
.title{
  height: 46px;
    width: 177px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-top: 28px;
}
</style>

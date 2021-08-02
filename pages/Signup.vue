<template>
  <div>
    <router-link
      class="pepito"
      to="/"

    >
      X
    </router-link>
    <div class="columns is-mobile">
    <div class="column is-half is-offset-one-quarter">
      <div class="column is-half is-offset-one-quarter">
     <p class="title">
      Signup
      </p>

    <form class="sg">
      <b-field label="Firstame">
        <b-input
          v-model="firstname"
        />
      </b-field>

      <b-field label="Lastname">
        <b-input
          v-model="lastname"
        />
      </b-field>

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

      <b-button class="mt-4 boton" type="is-rounded" @click.prevent="signup">
        Sign up
      </b-button>
      <b-button class="boton mt-4 is-rounded"  @click.prevent="login">
        Login
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
  name: 'SignupWithEmail',
  data () {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    }
  },
  mounted () {
    if (localStorage.getItem('token')) { this.$router.push('/panel') }
  },
  methods: {
    async signup ({ axios }) {
      const response = await this.$axios.post('/auth/signup', {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password
      })
      console.log('Segned up!!', response)
      this.$auth.$storage.setUniversal('email', response.data.email)
      this.$auth.$storage.setUniversal('token', response.data.token)
      this.$auth.$storage.setUniversal('typeofuser', response.data.typeofuser)
      this.$auth.$storage.setUniversal('id', response.data.id)
      this.$router.push('/panel/profile')
      const data = await this.$auth.loginWith('local', {
        data: {
          email: this.email,
          password: this.password
        }
      })
      console.log('Logged In!', data, this.$auth)

      // Signup(
      //   this.firstname,
      //   this.lastname,
      //   this.email,
      //   this.password
      // )
      // localStorage.token = response.data.token
      // localStorage.email = response.data.email
      // localStorage.firstname = response.data.firstname
      // localStorage.lastname = response.data.lastname
      // localStorage.typeofuser = response.data.typeofuser

      // this.$router.push('/welcome')
    },
    login () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.boton{
  background: linear-gradient(to right, #1382E0, #4945D0);
  color: white;
  border: none;
  margin-top: 15px;
  width:120px
}
.ex{
  color: rgb(89, 49, 249);
  border: none;
}
.sg{
  max-width: 280px
}
.pepito{
  font-size: 20px;
  position: absolute;
  top: 10px;
  right: 15px;
}

</style>

/* eslint-disable object-shorthand */
// import { apiClient } from './apiURL.js'

export default {
  async Signup (firstname, lastname, email, password) {
    return await this.$axios.$post('/auth/signup', {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password
    })
  },
  async updateUser (user) {
    return await this.$axios.$post('/users/update', user,
      {
        headers: { token: localStorage.token }
      })
  },
  async login (email, password) {
    return await this.$axios.$post('/auth/login', {
      email: email,
      password: password
    })
  },
  async getCurrentUser () {
    return await this.$axios.$get('users/user',
      {
        headers: { token: localStorage.token }
      })
  }
}

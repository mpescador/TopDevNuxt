/* eslint-disable no-console */
// import { apiClient } from './apiURL.js'
export default {

  async getAllProfiles () {
    return await this.$axios.$get('/profiles/')
  },
  async getCurrentProfile () {
    return await this.$axios.$get('profiles/current',
      {
        headers: { token: localStorage.token }
      })
  },
  async updateCurrentProfile (profile) {
    console.log('updateProfileFront')
    return await this.$axios.$post('profiles/current', profile,
      {
        headers: { token: localStorage.token }
      })
  }

}

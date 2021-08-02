<template>
  <div>
    <form>

          <b-field label="Email">
            <b-input
              v-model="email"
              type="email">
            </b-input>
          </b-field>

          <b-field label="Support Language">
            <b-select
              v-model="supportlang"
              placeholder="Choose"
              expanded
            >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
            </b-select>
          </b-field>

          <b-field label="Phone">
            <vue-tel-input v-model="phone" v-bind="bindProps">
            </vue-tel-input>
          </b-field>

          <b-button class="mt-5" type="is-primary" @click.prevent="updateUser">Next</b-button>

        </form>
  </div>
</template>

<script>
import { VueTelInput } from 'vue-tel-input'

export default {
  name: 'Contact',
  props: {
    emailp: {
      type: String
    },
    supportlangp: {
      type: String
    },
    phonep: {
      type: String
    },
  },
  data () {
    return {
      email: '',
      supportlang: 'English',
      phone: '',
      bindProps: {
        mode: 'international',
        preferredCountries: ['US', 'ES', 'DE', 'GB'],
        onlyCountries: [],
        ignoredCountries: []
        // name: 'telephone',
        // maxLen: 25,
        // dropdownOptions: {
        //   disabledDialCode: false
        // }
        // inputOptions: {
        //   showDialCode: false
        // }
      }
    }
  },
  methods: {
    nextstep () {
      this.$emit('nextstep')
    },
    updateUser () {
      this.$emit('updateUserContact', 
        { 
          email: this.email, 
          supportlang: this.supportlang,
          phone: this.phone
      
        })
    },
    // async updateUser () {
    //   const response = await UserService.updateUser({
    //     email: this.email,
    //     supportlang: this.supportlang,
    //     phone: this.phone
    //   })
    //   localStorage.supportlang = response.data.supportlang
    //   localStorage.phone = response.data.phone
    //   this.$emit('nextstep')
    // }
  },
  components: {
    VueTelInput
  },
  mounted () {
    this.email = this.emailp
    this.phone = this.phonep
    if (this.supportlangp) { this.supportlang = this.supportlangp }
  }
}

</script>

<style src="vue-tel-input/dist/vue-tel-input.css">

</style>

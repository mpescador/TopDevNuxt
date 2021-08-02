<template>
  <div>

    <form>

      <b-field label="Country of residence">
        <b-select
          v-model="countryorigin"
          placeholder="Choose country"
          icon="earth"
          expanded
        >
          <option disabled value="">Choose country</option>
          <optgroup label="Most common">
            <option value="Spain">Spain</option>
            <option value="United Kingdom">United Kingdom</option>
          </optgroup>

          <optgroup label="Other">
            <option v-for="(country, idx) in countries" :key="idx" :value="country">
              {{ country }}
            </option>
          </optgroup>
          
        </b-select>
      </b-field>

      <b-field label="Select a date">
        <b-datepicker
            v-model="dateofbirth"
            placeholder="Click to select..."
            icon="calendar-today"
            :locale="locale"
            trap-focus>
        </b-datepicker>
      </b-field>

      <b-button class="mt-5 mr-3" type="is-secondary" @click="laststep">Previous</b-button>
      <b-button class="mt-5" type="is-primary" @click.prevent="updateUser">Next</b-button>

    </form>

  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    countryoriginp: {
      type: String
    },
    dateofbirthp: {
      type: Date
    }
  },
  data () {
    return {
      countryorigin: '',
      dateofbirth: '',
      locale: undefined, // Browser locale,
      countries: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe']
    }
  },
  methods: {
    nextstep () {
      this.$emit('nextstep')
    },
    laststep () {
      this.$emit('laststep')
    },
    updateUser () {
      this.$emit('updateUserAbout', 
        { 
          countryorigin: this.countryorigin, 
          dateofbirth: this.dateofbirth
      
        })
    },
    // async updateUser () {
    //   console.log(this.dateofbirth)
    //   const response = await UserService.updateUser({
    //     dateofbirth: this.dateofbirth,
    //     countryorigin: this.countryorigin
    //   })
    //   localStorage.dateofbirth = response.data.dateofbirth
    //   localStorage.countryorigin = response.data.countryorigin
    //   this.$emit('nextstep')
    // }
  },
  mounted () {
    // this.dateofbirth = localStorage.dateofbirth
    // this.countryorigin = localStorage.countryorigin
    this.dateofbirth = this.dateofbirthp
    this.countryorigin = this.countryoriginp
  }

}
</script>

<style>

</style>
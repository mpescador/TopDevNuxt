<template>
  <div>
    <div class="media-left">
      <div>
        <div>
      <figure>
        <img :src="localUser.avatar" alt="Placeholder image" class="imaget">
      </figure>
        </div>
      </div>
    </div>
    <form class="forp">
      <b-field>
        <b-checkbox  type="is-info" v-model="localProfile.show" @input="updateProfileGeneral"> Show profile </b-checkbox>
      </b-field>
      <b-field label="Avatar URL" :label-position="labelPosition">
        <b-input v-on:focusout.native="updateUserGeneral" v-model="localUser.avatar"></b-input>
      </b-field>
      <b-field label="Video URL" :label-position="labelPosition">
        <b-input v-on:focusout.native="updateProfileGeneral" v-model="localProfile.profilevideo"></b-input>
      </b-field>
      <b-field label="Username" :label-position="labelPosition">
        <b-input v-on:focusout.native="updateUserGeneral" v-model="localUser.username"></b-input>
      </b-field>
      <b-field label="Country of residence" :label-position="labelPosition">
        <b-select v-on:focusout.native="updateUserGeneral" v-model="localUser.countryorigin" placeholder="Choose country" icon="earth" expanded>
          <option   disabled value="">Choose country</option>
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
      <b-field label="Description" :label-position="labelPosition">
        <b-input type="textarea" maxlength="400" v-on:focusout.native="updateProfileGeneral" v-model="localProfile.description"></b-input>
      </b-field>
    </form>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
export default {
  name: 'General',
  data: () => ({
    labelPosition: '',
    avatar: '',
    username: '',
    countries: [
      'Afghanistan',
      'Albania',
      'Algeria',
      'Andorra',
      'Angola',
      'Anguilla',
      'Antigua Barbuda',
      'Argentina',
      'Armenia',
      'Aruba',
      'Australia',
      'Austria',
      'Azerbaijan',
      'Bahamas',
      'Bahrain',
      'Bangladesh',
      'Barbados',
      'Belarus',
      'Belgium',
      'Belize',
      'Benin',
      'Bermuda',
      'Bhutan',
      'Bolivia',
      'Bosnia Herzegovina',
      'Botswana',
      'Brazil',
      'British Virgin Islands',
      'Brunei',
      'Bulgaria',
      'Burkina Faso',
      'Burundi',
      'Cambodia',
      'Cameroon',
      'Cape Verde',
      'Cayman Islands',
      'Chad',
      'Chile',
      'China',
      'Colombia',
      'Congo',
      'Cook Islands',
      'Costa Rica',
      'Cote D Ivoire',
      'Croatia',
      'Cruise Ship',
      'Cuba',
      'Cyprus',
      'Czech Republic',
      'Denmark',
      'Djibouti',
      'Dominica',
      'Dominican Republic',
      'Ecuador',
      'Egypt',
      'El Salvador',
      'Equatorial Guinea',
      'Estonia',
      'Ethiopia',
      'Falkland Islands',
      'Faroe Islands',
      'Fiji',
      'Finland',
      'France',
      'French Polynesia',
      'French West Indies',
      'Gabon',
      'Gambia',
      'Georgia',
      'Germany',
      'Ghana',
      'Gibraltar',
      'Greece',
      'Greenland',
      'Grenada',
      'Guam',
      'Guatemala',
      'Guernsey',
      'Guinea',
      'Guinea Bissau',
      'Guyana',
      'Haiti',
      'Honduras',
      'Hong Kong',
      'Hungary',
      'Iceland',
      'India',
      'Indonesia',
      'Iran',
      'Iraq',
      'Ireland',
      'Isle of Man',
      'Israel',
      'Italy',
      'Jamaica',
      'Japan',
      'Jersey',
      'Jordan',
      'Kazakhstan',
      'Kenya',
      'Kuwait',
      'Kyrgyz Republic',
      'Laos',
      'Latvia',
      'Lebanon',
      'Lesotho',
      'Liberia',
      'Libya',
      'Liechtenstein',
      'Lithuania',
      'Luxembourg',
      'Macau',
      'Macedonia',
      'Madagascar',
      'Malawi',
      'Malaysia',
      'Maldives',
      'Mali',
      'Malta',
      'Mauritania',
      'Mauritius',
      'Mexico',
      'Moldova',
      'Monaco',
      'Mongolia',
      'Montenegro',
      'Montserrat',
      'Morocco',
      'Mozambique',
      'Namibia',
      'Nepal',
      'Netherlands',
      'Netherlands Antilles',
      'New Caledonia',
      'New Zealand',
      'Nicaragua',
      'Niger',
      'Nigeria',
      'Norway',
      'Oman',
      'Pakistan',
      'Palestine',
      'Panama',
      'Papua New Guinea',
      'Paraguay',
      'Peru',
      'Philippines',
      'Poland',
      'Portugal',
      'Puerto Rico',
      'Qatar',
      'Reunion',
      'Romania',
      'Russia',
      'Rwanda',
      'Saint Pierre Miquelon',
      'Samoa',
      'San Marino',
      'Satellite',
      'Saudi Arabia',
      'Senegal',
      'Serbia',
      'Seychelles',
      'Sierra Leone',
      'Singapore',
      'Slovakia',
      'Slovenia',
      'South Africa',
      'South Korea',
      'Spain',
      'Sri Lanka',
      'St Kitts Nevis',
      'St Lucia',
      'St Vincent',
      'St. Lucia',
      'Sudan',
      'Suriname',
      'Swaziland',
      'Sweden',
      'Switzerland',
      'Syria',
      'Taiwan',
      'Tajikistan',
      'Tanzania',
      'Thailand',
      'Togo',
      'Tonga',
      'Trinidad Tobago',
      'Tunisia',
      'Turkey',
      'Turkmenistan',
      'Turks Caicos',
      'Uganda',
      'Ukraine',
      'United Arab Emirates',
      'United Kingdom',
      'Uruguay',
      'Uzbekistan',
      'Venezuela',
      'Vietnam',
      'Virgin Islands (US)',
      'Yemen',
      'Zambia',
      'Zimbabwe'
    ]
  }),
  props: {
    user: Object,
    profile: Object
  },
  created () {
    this.localUser = this.$props.user
    this.localProfile = this.$props.profile
  },

  methods: {
    updateUserGeneral () {
      const user = {
        username: this.localUser.username,
        countryorigin: this.localUser.countryOrigin,
        avatar: this.localUser.avatar
      }
      this.$emit('updateUserGeneral', user)
    },
    updateProfileGeneral () {
      const profile = {
        description: this.localProfile.description,
        profilevideo: this.localProfile.profilevideo,
        show: this.localProfile.show
      }
      this.$emit('updateProfileGeneral', profile)
    }
  }
}
</script>

<style scoped>
.picwrap {
  margin-left: 25px;
  margin-right: 25px;
}
.imaget{
  border-radius: 50%;
  border-radius: 50%;
  margin-left: 26px;
  margin-top: 50px;
  width: 28%;
  display: block;
  margin: auto;
}
.forp {
  margin-top: 30px;
}
.select:not(.is-multiple):not(.is-loading)::after {
    border-color: #8c67ef;
    right: 1.125em;
    z-index: 4;
}
</style>

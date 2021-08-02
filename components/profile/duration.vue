<template>
  <div class="column">
    <div class="columns is-mobile">
      <div class="column is-full">
    <form class="for">
      <b-field>
        <b-checkbox
        v-model="duration15Exist"
        true-value="true"
        false-value="false"
        type="is-info"
        >
          15 minutes
        </b-checkbox>
        <b-field label="Price in €" :label-position="labelPosition">
          <b-input type="number" v-model="price15"> </b-input>
        </b-field>
        <b-button type="is-primary" @click="checkOperation(duration15Exist, bookingTypeId15, price15, duration15, profileId)">
            Save
        </b-button>
      </b-field>
      <b-field>
        <b-checkbox
        v-model="duration30Exist"
        true-value="true"
        false-value="false"
        type="is-info"
        >
          30 minutes
        </b-checkbox>
        <b-field label="Price in €" :label-position="labelPosition">
          <b-input type="number" v-model="price30"> </b-input>
        </b-field>
        <b-button type="is-primary" @click="checkOperation(duration30Exist, bookingTypeId30, price30, duration30, profileId)">
            Save
        </b-button>
      </b-field>
      <b-field>
        <b-checkbox
        v-model="duration60Exist"
        true-value="true"
        false-value="false"
        type="is-primary"
        >
          60 minutes
        </b-checkbox>
        <b-field label="Price in €" :label-position="labelPosition">
          <b-input type="number" v-model="price60"> </b-input>
        </b-field>
        <b-button type="is-primary" @click="checkOperation(duration60Exist, bookingTypeId60, price60, duration60, profileId)">
            Save
        </b-button>
      </b-field>
    </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data: () => ({
    labelPosition: 'on-border',
    localBookingTypes: [],
    duration15: 15,
    duration15Exist: false,
    bookingTypeId15: null,
    price15: 0,
    duration30: 30,
    duration30Exist: false,
    bookingTypeId30: null,
    price30: 0,
    duration60: 60,
    duration60Exist: false,
    bookingTypeId60: null,
    price60: 0,
    profileId: null
  }),

  props: {
    bookingTypes: Array
  },
  methods: {
    deleteBookingTypes (id) {
      this.$emit('deleteBookingTypes', id)
    },
    updateBookingTypes (price, duration, profileId) {
      if (price > 0) {
        const bookingType = {
          profile: profileId,
          price,
          duration
        }
        this.$emit('updateBookingTypes', bookingType)
      } else {
        alert('price < 0')
      }
    },
    checkOperation (durationExists, id, price, duration, profileId) {
      if (durationExists === 'false') {
        this.deleteBookingTypes(id)
      } else {
        this.updateBookingTypes(price, duration, profileId)
      }
    }
  },
  created () {
    this.localBookingTypes = this.$props.bookingTypes
    this.profileId = this.localBookingTypes.profileId
  },
  mounted () {
    this.profileId = this.localBookingTypes.profileId
    for (let i = 0; i < this.localBookingTypes.length; i++) {
      if (this.localBookingTypes[i].duration === 15) {
        this.duration15Exist = true
        this.price15 = this.localBookingTypes[i].price
        this.bookingTypeId15 = this.localBookingTypes[i]._id
      }
      if (this.localBookingTypes[i].duration === 30) {
        this.duration30Exist = true
        this.price30 = this.localBookingTypes[i].price
        this.bookingTypeId30 = this.localBookingTypes[i]._id
      }
      if (this.localBookingTypes[i].duration === 60) {
        this.duration60Exist = true
        this.price60 = this.localBookingTypes[i].price
        this.bookingTypeId60 = this.localBookingTypes[i]._id
      }
    }
  }
}
</script>

<style scoped>
.for {
  margin-top: 3px;
}
.button {
    background: linear-gradient(to right, #1382E0, #4945D0);
    border-width: 1px;
    color: #ffffff;
    cursor: pointer;
   /* justify-content: center; */
   /* padding-bottom: calc(0.5em - 1px); */
    /* padding-left: 1em;
    padding-right: 1em;
    padding-top: calc(0.5em - 1px); */
    /* text-align: center;*/
    white-space: nowrap;
    border-radius: 30px;
    margin-left: 11px;
}
</style>

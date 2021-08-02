<template>
  <div>
    <div class="columns is-mobile">
      <div class="column">
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
            Date and time
          </h1>
          <p class="p">
            When will the session take place
          </p>

          <b-field label="Select datetime" class="column">
            <b-datepicker
              v-model="selectedDate"
              item-selected-primary
              icon="calendar-today"
              placeholder="Click to select..."
              :computed="dateSel"
              :min-date="min"
              trap-focus
              @input="checkCalendar"
            />
          </b-field>

          <div v-for="(slot, idx) in slotsSelect" :key="idx" class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <nuxt-link to="/publicprofile">
                    <p class="title title2 is-4">
                      {{ slot.intervalBook }}
                    </p>
                  </nuxt-link>
                  <span>{{ booking.booking.price }} € / {{ booking.booking.duration }} min</span>
                  <b-button class="btnbook" @click="book(slot)">
                    Book
                  </b-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data: () => ({
    blocks: [],
    min: new Date(),
    max: new Date(),
    selectedDate: new Date(),
    selectedDateBefore: new Date(),
    dates: [],
    slots: [],
    booking: {},
    slotsSelect: [],
    week0: '',
    weekActual: ''
  }),
  computed: {
    dateSel () {
      this.loadSelectSlot()
      return this.selectedDate
    }
  },
  mounted () {
    if (this.$route.params.booking === undefined) {
      console.log('------------------UNDEFINED---------*********************')
      const retrievedObject = localStorage.getItem('booking')
      const booking = JSON.parse(retrievedObject)
      if (booking === null) {
        this.$router.push('/')
      }
      console.log('<<<<<<<<BOOKING>>>>>>><', booking)
      this.booking.booking = booking
      console.log(this.booking)
    } else {
      console.log('---------------------------*********************')
      console.log('NOT UNDEFINED')
      this.booking = this.$route.params
    }
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>> SELECTDATE ===> ', this.selectedDate)
    this.min = new Date(this.$dayjs().subtract(1, 'day'))
    const weekOfYear = require('dayjs/plugin/weekOfYear')
    this.$dayjs.extend(weekOfYear)
    this.loadSelectSlot()
    const date1 = this.$dayjs(this.selectedDate)
    this.week0 = this.$dayjs(date1).week()
    this.weekActual = this.week0
    this.selectedDateBefore = this.selectedDate
    this.loadCalendar() // load my actual week
  },
  methods: {
    loadSelectSlot () {
      console.log('slots => ', this.slots)
      this.slotsSelect = []
      for (let i = 0; i < this.slots.length; i++) {
        const dateSlot = this.$dayjs(this.slots[i].date).format('YYYY-MM-DD')
        const dateSelect = this.$dayjs(this.selectedDate).format('YYYY-MM-DD')
        if (dateSlot === dateSelect) {
          const hIni = new Date(this.slots[i].h_init).getHours()
          const mInit = new Date(this.slots[i].h_init).getMinutes()
          let hMInit = ''
          const hFin = new Date(this.slots[i].h_fin).getHours()
          const mFin = new Date(this.slots[i].h_fin).getMinutes()
          let hMFin = hFin.toString() + ':' + mFin.toString()

          if (mInit.toString().length < 2) {
            hMInit = hIni + ':' + mInit.toString() + '0'
          } else {
            hMInit = hIni + ':' + mInit.toString()
          }
          if (mFin.toString().length < 2) {
            hMFin = hFin + ':' + mFin.toString() + '0'
          } else {
            hMFin = hFin + ':' + mFin.toString()
          }

          console.log(hIni + ' - ' + hFin + ' - ' + dateSlot)
          const start = new Date(dateSlot)
          start.setHours(hIni, mInit)
          const end = new Date(dateSlot)
          end.setHours(hFin, mFin)

          this.slotsSelect.push(
            {
              intervalBook: hMInit + ' - ' + hMFin,
              start,
              end
            }
          )
        }
      }
    },

    loadSlots () {
      console.log('<<<<<<<<<<<<<<<<<<<<<<<< loadSlots <<<<<<<<<<<<<<<<<<<<<<<')
      console.log(this.booking)
      const blocks = this.blocks
      const duration = this.booking.booking.duration * 60000
      let obj = {}
      for (let i = 0; i < blocks.length; i++) {
        const minutesBlock = ((new Date(blocks[i].end).getTime() - new Date(blocks[i].start).getTime())) / 1000 / 60 // p.e 120 min
        const numbersOfSlots = minutesBlock / ((duration) / 60000)
        for (let j = 0; j < numbersOfSlots; j++) {
          const date = this.$dayjs(this.blocks[i].start).format('YYYY/MM/DD')
          obj = {
            date,
            h_init: new Date(new Date(blocks[i].start).getTime() + (duration * j)),
            h_fin: new Date(new Date(blocks[i].start).getTime() + (duration * j) + duration)
          }
          this.slots.push(obj)
        }
      }
    },

    book (slot) {
      // userId: this.booking.booking.userId,
      // language: this.booking.booking.supportLang
      console.log('**************************idUserProfessionalidUserProfessional*********************')
      console.log(this.booking.booking.firstNameProfessional, this.booking.booking.lastNameProfessional)
      const bookingData = {
        professional_id: this.booking.booking.idUserProfessional,
        startBook: slot.start,
        endBook: slot.end,
        duration: this.booking.booking.duration,
        price: this.booking.booking.price,
        currency: 'EUR',
        language: this.booking.booking.supportLang
      }
      const url = '/bookings/'
      this.$axios
        .$post(url, bookingData,
          {
            headers: { token: this.$auth.$storage.getUniversal('token') }
          }
        )
        .then((response) => {
          console.log('-------********====>', response)
          // this.$router.push({ name: 'booking-payment', params: { booking: bookingData } })
          const name = this.booking.booking.firstNameProfessional + ' ' + this.booking.booking.lastNameProfessional
          const price = this.booking.booking.price
          const duration = this.booking.booking.duration
          this.$router.push({ path: 'payment', query: { name, price, duration } })
          // router.push({ path: 'register', query: { plan: 'private' }})
        })
        .catch(function (error) {
          console.log(error)
        })
      // this.$router.push({ name: 'booking-payment', params: { booking: bookingData } })
    },
    loadCalendar () {
      const weekOfYear = require('dayjs/plugin/weekOfYear')
      this.$dayjs.extend(weekOfYear)
      this.loadSelectSlot()
      console.log(this.selectedDate)
      const date1 = this.$dayjs(this.selectedDate)
      const weekSelect = (this.$dayjs(date1).week())
      const n = weekSelect - this.week0
      console.log('******************************** idUserProfessional ******************', this.booking.idUserProfessional)
      let url = ''
      if (this.$route.params !== undefined && Object.keys(this.$route.params).length > 0) {
        console.log('<<<<<<<<<<<<<< IF >>>>>>>>>>>>>> ', Object.keys(this.$route.params).length)
        url = `/calendars/${this.$route.params.booking.idUserProfessional}/week/${n}`
      } else {
        console.log('<<<<<<<<<<<<<< ELSE >>>>>>>>>>>>>>')
        url = `/calendars/${this.booking.booking.idUserProfessional}/week/${n}`
      }
      // const url = `/calendars/${this.this.booking.idUserProfessional}/week/${n}`
      console.log('URL ===> ', url)
      this.$axios
        .$get(url)
        .then((response) => {
          this.blocks = response
          // const last = this.blocks.length - 1 // 10
          // this.booking = this.$route.params
          // const min2 = this.blocks[0].start
          // this.min = new Date(this.$dayjs(min2).subtract(1, 'day'))
          // this.max = new Date(this.blocks[last].end)
          this.loadSlots()
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    checkCalendar () {
      const weekOfYear = require('dayjs/plugin/weekOfYear')
      this.$dayjs.extend(weekOfYear)
      console.log(this.selectedDate)
      const date1 = this.$dayjs(this.selectedDate)
      if (this.weekActual !== this.$dayjs(date1).week() && (this.$dayjs(date1).week() - this.weekActual) >= 0) {
        this.weekActual = this.$dayjs(date1).week()
        this.loadCalendar()
      }
    }
  }
}
</script>

<style scoped>
.book{
  margin-top: 100px;
}
.th1{
  font-size: 300%;
}
.p {
  margin-bottom: 50px;
}
.card {
  margin-bottom: 15px;
  margin-top: 15px;
  width: 400px;
  height: 110px;
}
.title2{
  height: 23px;
    width: -27px;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-left: 1px;
    margin-top: 0px;
    margin-bottom: 10px !important;
}
.btnbook{
  margin-left: 172px;
    margin-bottom: 50p;
    margin-top: -30px;
    background-color: rgb(191, 243, 226);
    color: blue;
    border-radius: 15px;
    border: none;
}
.select{
  margin-top: 20px;
    text-align: center;
}
.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selected {
  background-color: #2246e9;
    color: #fff;
}
</style>

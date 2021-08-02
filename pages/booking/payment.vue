<template>
  <div>
    <div class="columns is-mobile">
      <div class="column is-3 is-offset-5">
        <section>
          <h1 class="subtitle">
            Payment
          </h1>
          <h3 class="subtitle2">
            {{ $route.query.name }} {{ $route.query.duration }} min {{ $route.query.price }} €
          </h3>
          <hr>
          <form class="fr">
            <b-field>
              <b-input size="is-small" icon="credit-card" placeholder="Credit card" />
            </b-field>

            <b-field grouped>
              <b-field style="margin-rigth:15px;">
                <b-select style="margin-rigth:15px;" placeholder="Month" icon="calendar" size="is-small" expanded>
                  <optgroup label="Select month">
                    <option v-for="(month, idx) in months" :key="idx" :value="month">
                      {{ month }}
                    </option>
                  </optgroup>
                </b-select>
              </b-field>

              <b-field>
                <b-select placeholder="Year" icon="calendar" size="is-small" expanded>
                  <optgroup label="Select year">
                    <option v-for="(year, idx) in years" :key="idx" :value="year">
                      {{ year }}
                    </option>
                  </optgroup>
                </b-select>
              </b-field>
            </b-field>
            <b-field>
              <b-input size="is-small" icon="credit-card" placeholder="Cw2" maxlength="3" />
            </b-field>
            <b-button type="is-primary btnbuy is-rounded btnbuy" @click="loadFakePay">
              Pay {{ $route.query.price }} €
            </b-button>
          </form>

          <b-modal v-model="isActive" @click.native="checkFakePay">
            <div class="card">
              <h3 class="subtitle7">
                Making payment
              </h3>
              <b-progress
                :value="percentage"
                style="width: 300px; margin: auto; margin-top: 35px;"
                show-value
                format="percent"
                type="is-info"
              />
              <b-button class="boton" v-if="!showBtnOk" type="is-danger" @click="isActive = false">
                Cancel
              </b-button>
              <b-button class="boton" v-if="showBtnOk" type="is-success" @click="isActive = false">
                Payment ok
              </b-button>
            </div>
          </b-modal>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isActive: false,
    labelPosition: 'on-border',
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    years: [],
    percentage: 10,
    showBtnOk: false

  }),
  mounted () {
    const yearF = 2050
    for (let i = 2021; i < yearF; i++) {
      this.years.push(i)
    }
  },
  methods: {
    checkFakePay () {
      if (this.percentage < 100) {
        this.percentage = 1
      } else {
        this.$router.push('/booking/success')
      }
    },
    loadFakePay () {
      this.isActive = true
      const self = this
      const load = setInterval(function () {
        if (self.percentage < 100) {
          self.percentage += 1
        }
        if (self.percentage === 100) {
          clearInterval(load)
          self.showBtnOk = true
        }
      }, 35)
    }
  }
}
</script>

<style scoped>
.texto{
  margin-top: 165px
}
.subtitle{
      text-align: center;
  color: #4a4a4a;
    font-size: 3.25rem;
    font-weight: 400;
    line-height: 1.25;
    margin-top: 25%;
}
.subtitle2{
      text-align: center;
      font-size: 2rem;
}
.btnbuy{
background: linear-gradient(to right, #1382E0, #4945D0);
  color: white;
  border: none;
  margin-top: 15px;
  width:194px;
  text-align: center;
  margin-left: 28px;
}
.card {
  max-width: 460px;
  height: 380px;
  margin: auto;
}
.subtitle7{
    text-align: center;
    color: #4a4a4a;
    font-size: 40px;
    font-weight: 400;
    line-height: 1.25;
    padding-top: 50px;
}
.boton{
  border: none;
  margin-top: 15px;
  width:120px;
  border-radius: 38px;
  margin: auto;
  display: block;
  margin-top: 65px;
}
</style>

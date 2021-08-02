<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <b-field>
        <b-switch
        @input="showProfessional = !showProfessional"
        :value="true"
        v-model="status"
        type="is-info">
            {{ status === true ? 'Professional' : 'Client'}}
        </b-switch>
      </b-field>
      </div>
    <div class="column" v-if="showProfessional">
    <b-table
    :data="professionalBookings"
    :paginated="isPaginated"
    :pagination-simple="isPaginationSimple"
    :default-sort-direction="defaultSortDirection"
    :pagination-rounded="isPaginationRounded"
    :sort-icon="sortIcon"
    :sort-icon-size="sortIconSize"
    >
    <b-table-column field="startBook" label="Start" sortable v-slot="props">
        {{ $dayjs(props.row.startBook).format('dddd, MMMM D, YYYY h:mm A') }}
    </b-table-column>
    <b-table-column field="endBook" label="End" sortable v-slot="props">
         {{ $dayjs(props.row.endBook).format('dddd, MMMM D, YYYY h:mm A') }}
    </b-table-column>
     <b-table-column field="duration" label="Duration min" sortable v-slot="props">
       {{ props.row.duration }}
    </b-table-column>
    <b-table-column field="price" label="Price" sortable v-slot="props">
       {{ props.row.price }}
    </b-table-column>
    <b-table-column field="currency" label="Currency" sortable v-slot="props">
       {{ props.row.currency }}
    </b-table-column>
    </b-table>
    </div>
    <!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
    <div class="column" v-if="!showProfessional">
    <!-- <b-field>
        <b-switch
        @input="showProfessional = !showProfessional"
        v-if="!showProfessional"
        :value="true"
        type="is-info">
            User
        </b-switch>
      </b-field> -->
    <b-table
    :data="clientBookings"
    :paginated="isPaginated"
    :pagination-simple="isPaginationSimple"
    :default-sort-direction="defaultSortDirection"
    :pagination-rounded="isPaginationRounded"
    :sort-icon="sortIcon"
    :sort-icon-size="sortIconSize"
    >
    <b-table-column field="startBook" label="Start" sortable v-slot="props">
        {{ $dayjs(props.row.startBook).format('dddd, MMMM D, YYYY h:mm A') }}
    </b-table-column>
    <b-table-column field="endBook" label="End" sortable v-slot="props">
         {{ $dayjs(props.row.endBook).format('dddd, MMMM D, YYYY h:mm A') }}
    </b-table-column>
     <b-table-column field="duration" label="Duration min" sortable v-slot="props">
       {{ props.row.duration }}
    </b-table-column>
    <b-table-column field="price" label="Price" sortable v-slot="props">
       {{ props.row.price }}
    </b-table-column>
    <b-table-column field="currency" label="Currency" sortable v-slot="props">
       {{ props.row.currency }}
    </b-table-column>
    </b-table>
    </div>
</div>
</div>
</template>

<script>
export default {
  middleware: 'auth',
  data () {
    return {
      isPaginated: false,
      isPaginationSimple: false,
      isPaginationRounded: false,
      defaultSortDirection: 'asc',
      sortIcon: 'arrow-up',
      sortIconSize: 'is-small',
      showProfessional: true,
      professionalBookings: '',
      clientBookings: '',
      status: true,
      columns: [
        {
          field: 'startBook',
          label: 'Start',
          width: '40',
          Date: true
        },
        {
          field: 'endBook',
          label: 'End',
          width: '40',
          Date: true
        },
        {
          field: 'duration',
          label: 'Duration',
          centered: true,
          numeric: true
        },
        {
          field: 'price',
          label: 'Price',
          centered: true,
          numeric: true
        },
        {
          field: 'currency',
          label: 'Currency',
          centered: true
        }
      ]
    }
  },
  created () {
    console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><< Created <<<<<<<<<<<<<<<<<<<<<<<<<<<<')
    this.professionalBookings = this.$props.professionalBookingsProps
    this.clientBookings = this.$props.clientBookingsProps
  },
  props: {
    professionalBookingsProps: Array,
    clientBookingsProps: Array
  }
  /* async asyncData (context) {
    const axios = context.$axios
    const professionalBookings = await axios.$get('bookings/professional',
      {
        headers: { token: context.$auth.$storage.getUniversal('token') }
      })

    const clientBookings = await axios.$get('bookings/client',
      {
        headers: { token: context.$auth.$storage.getUniversal('token') }
      })
    return { professionalBookings, clientBookings }
  } */
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 15px;
  flex-direction: column;
}
.columns {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>

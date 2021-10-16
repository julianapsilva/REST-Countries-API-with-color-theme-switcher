<template>
  <div class="wrapper-home">
    <Filters @filterCountries="filterCountries" :countries="allCountries" />
    <CountryContainer :countries="countries" />
  </div>
</template>

<script>
import CountryContainer from '@/components/CountryContainer'
import Filters from '@/components/Filters'
import api from '@/services/api'
export default {
  components: {
    CountryContainer,
    Filters
  },
  data: function() {
    return {
      allCountries: [],
      countries: []
    }
  },
  methods: {
    async getCountries() {
      const response = await api.get('v2/all')
      this.allCountries = response.data
      this.countries = this.allCountries
    },
    filterCountries(payload) {
      payload == 'all'
        ? (this.countries = this.allCountries)
        : (this.countries = payload)
      console.log(payload)
    }
  },
  created() {
    this.getCountries()
  }
}
</script>

<style>
.wrapper-home {
  background-color: hsl(0, 0%, 98%);
}
</style>

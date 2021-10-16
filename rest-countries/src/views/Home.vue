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
.countries-container {
  margin-right: 100px;
  margin-left: 100px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 80px;
  line-height: 2;
}
.countries-container img {
  width: 100%;
}
.countries-container ul li {
  list-style: none;
}
.countries-item {
  border: 1px solid;
}
</style>

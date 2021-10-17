<template>
  <PageLoading v-if="loading" />
  <div class="wrapper-home" v-else>
    <Filters @filterCountries="filterCountries" :countries="allCountries" />
    <CountryContainer :countries="countries" />
  </div>
</template>

<script>
import PageLoading from '@/components/PageLoading'
import CountryContainer from '@/components/CountryContainer'
import Filters from '@/components/Filters'
import api from '@/services/api'
export default {
  components: {
    PageLoading,
    CountryContainer,
    Filters
  },
  data: function() {
    return {
      allCountries: [],
      countries: [],
      loading: true
    }
  },
  methods: {
    async getCountries() {
      const response = await api.get('v2/all')
      this.allCountries = response.data
      this.countries = this.allCountries
      this.loading = false
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
  padding: 0 100px;
}

@media (max-width: 1500px) {
  .wrapper-home {
    padding: 0 50px;
  }
}
</style>

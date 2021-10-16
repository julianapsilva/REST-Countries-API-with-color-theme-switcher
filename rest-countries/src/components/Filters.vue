<template>
  <div class="filter-search">
    <div>
      <i data-feather="circle"></i>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Pesquise por um país"
        v-model="search"
        @keyup.enter="searchByName"
      />
    </div>
    <div>
      <label for="countries">Filtrar</label>
      <select id="countries" :onchange="filterByRegion" v-model="select">
        <option country="all">All</option>
        <option country="Africa">Africa</option>
        <option country="Americas">Americas</option>
        <option country="Asia">Asia</option>
        <option country="Europe">Europe</option>
        <option country="Oceania">Oceania</option>
      </select>
    </div>
  </div>
</template>

<script>
import api from '@/services/api'
export default {
  data() {
    return {
      select: null,
      search: ''
    }
  },
  props: {
    countries: Array
  },
  methods: {
    filterByRegion() {
      let filter = ''
      const region = this.countries.filter(
        country => country.region == this.select
      )
      this.select == 'All' ? (filter = 'all') : (filter = region)
      this.$emit('filterCountries', filter)
    },
    async searchByName() {
      let filter = 'all'
      if (this.search) {
        const response = await api.get(`v2/name/${this.search}`)
        filter = response.data
      }
      this.$emit('filterCountries', filter)
    }
  }
}
</script>

<style>
.filter-search {
  display: flex;
  justify-content: space-between;
  margin-right: 100px;
  margin-left: 100px;
  margin-bottom: 40px;
}
#search {
  /* padding: 20px
100px; */
  height: 30px;
  width: 250px;
  padding: 10px;
  box-shadow: 4px 9px 5px -9px #000000;
  border: none;
  border-radius: 15px;
  text-align: left;
}
</style>

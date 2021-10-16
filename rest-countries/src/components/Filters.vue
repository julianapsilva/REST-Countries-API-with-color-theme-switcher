<template>
  <div class="filter-search">
    <div class="search-input">
      <img src="@/assets/icons/search.svg" alt="search-icon" />
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search for a country..."
        v-model="search"
        @keyup.enter="searchByName"
      />
    </div>
    <div class="filter-select">
      <label for="countries">Filter by Region</label>
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
  height: 30px;
  width: 400px;
  padding: 10px;
  box-shadow: 1px 4px 4px 0px rgba(0, 0, 0, 0.03);
  border: 0.5px solid rgba(0, 0, 0, 0.04);
  border-radius: 15px;
  text-align: left;
}
.search-input {
  position: relative;
}
.search-input img {
  position: absolute;
  top: 15px;
  left: 20px;
  width: 20px;
}
.search-input input::placeholder {
  padding-left: 40px;
}
.filter-select {
  position: relative;
  display: flex;
  align-items: center;
}
.filter-select label {
  position: absolute;
  margin-left: 10px;
}
.filter-select select {
  padding: 10px 40px;
}
.label-select{
  display:none;
}

@media(max-width: 900px){
  .filter-search{
    flex-direction: column;
  }
}

</style>

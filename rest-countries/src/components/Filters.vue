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
      <select id="countries" :onchange="filterByRegion" v-model="select">
        <option :value="null" disabled selected hidden>Filter by Region</option>
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
  margin-bottom: 40px;
}
#search {
  height: 30px;
  width: 400px;
  padding: 10px 60px;
  box-shadow: 1px 4px 4px 0px rgba(0, 0, 0, 0.03);
  border: 0.5px solid rgba(0, 0, 0, 0.04);
  border-radius: 15px;
  text-align: left;
  outline: none;
}
.search-input {
  position: relative;
}
.search-input input {
  background: var(--light-mode-background);
}

.search-input img {
  position: absolute;
  top: 15px;
  left: 20px;
  width: 20px;
}

.filter-select {
  display: flex;
  align-items: center;
}
.filter-select select {
  padding: 12px 20px;
  border: none;
  background: var(--white);
  box-shadow: 1px 4px 4px 0px rgba(0, 0, 0, 0.06);
  border: 0.5px solid rgba(0, 0, 0, 0.05);
  outline: none;
}
.label-select {
  display: none;
}

.theme-dark .filter-select select,
.theme-dark .search-input input {
  background: var(--dark-mode-elements);
  color: var(--white);
}

.theme-dark .search-input input::placeholder {
  color: var(--white);
}

@media (max-width: 900px) {
  .filter-search {
    flex-direction: column;
  }
  .filter-select {
    margin: 30px 0;
  }
  .filter-select select {
    padding-right: 50px;
  }
  #search {
    width: 80%;
    padding: 10px 60px;
  }
}
@media (max-width: 400px) {
  .filter-search {
    margin-left: -35px;
    margin-right: -35px;
  }
  #search {
    height: 30px;
    width: 220px;
    padding: 10px 50px;
  }
  .search-input img {
    width: 16px;
    top: 18px;
  }
}
</style>

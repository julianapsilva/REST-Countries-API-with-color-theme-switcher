<template>
  <div>
    <div>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Pesquise por um país"
        v-model="search"
      />
      <button @click="getSearch">Buscar</button>
      <div>
        {{ country }}
      </div>
    </div>
    <div>
      <label for="countries">Filtrar</label>
      <select id="countries" :onchange="filterCountries" v-model="select">
        <option country="Africa">Africa</option>
        <option country="Americas">Americas</option>
        <option country="Asia">Asia</option>
        <option country="Europe">Europe</option>
        <option country="Oceania">Oceania</option>
      </select>
    </div>
    <div class="countries-container" v-if="!filter">
      <div
        class="countries-item"
        v-for="country in countries"
        :key="country.name"
      >
       <router-link :to="{ name: 'country', params: { name: country.name } }">
        <img :src="country.flag" alt="" />
        <ul>
          <li>
            <strong>{{ country.name }}</strong>
          </li>
          <li><strong>População: </strong>{{ country.population }}</li>
          <li><strong>Região: </strong>{{ country.region }}</li>
          <li><strong>Capital: </strong>{{ country.capital }}</li>
        </ul>
        </router-link>
      </div>
    </div>

    <div class="countries-container" v-else>
      <div class="countries-item" v-for="country in region" :key="country.name">
        <router-link :to="{ name: 'country', params: { name: country.name } }">
          <img :src="country.flag" alt="flag" />
          <ul>
            <li>
              <strong>{{ country.name }}</strong>
            </li>
            <li><strong>População: </strong>{{ country.population }}</li>
            <li><strong>Região: </strong>{{ country.region }}</li>
            <li><strong>Capital: </strong>{{ country.capital }}</li>
          </ul>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      countries: [],
      select: "",
      filter: false,
      region: [],
      search: "",
      country: [],
    };
  },
  methods: {
    getCountries() {
      axios
        .get("https://restcountries.eu/rest/v2/all")
        .then((r) => (this.countries = r.data));
    },
    filterCountries() {
      this.region = this.countries.filter(
        (country) => country.region == this.select
      );
      this.filter = true;
    },
    getSearch() {
      axios
        .get(`https://restcountries.eu/rest/v2/name/${this.search}`)
        .then((r) => (this.country = r.data));
    },
  },

  created() {
    this.getCountries();
  },
};
</script>

<style>
.countries-container {
  margin-right: 100px;
  margin-left: 100px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 60px;
  line-height: 2;
}
.countries-container img {
  width: 50%;
}
.countries-container ul li {
  list-style: none;
}
.countries-item {
  border: 1px solid;
}
</style>

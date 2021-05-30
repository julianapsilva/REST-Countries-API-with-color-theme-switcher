<template>
  <div>
    <div>
      <label for="countries">Filtrar</label>
      <select id="countries" :onchange="filterCountries" v-model="select">
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europa</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
    <div class="countries-container">
      <div class="countries-item" v-for="value in countries" :key="value.name">
        <img :src="value.flag" alt="" />
        <ul>
          <li>
            <strong>{{ value.name }}</strong>
          </li>
          <li><strong>População: </strong>{{ value.population }}</li>
          <li><strong>Região: </strong>{{ value.region }}</li>
          <li><strong>Capital: </strong>{{ value.capital }}</li>
        </ul>
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
    };
  },
  methods: {
    getCountries() {
      axios
        .get("https://restcountries.eu/rest/v2/all")
        .then((r) => (this.countries = r.data));
    },
    filterCountries() {
      const region = this.countries.filter(
        (country) => country.region == this.select
      );
      // this.countries = region;
      console.log(region);
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

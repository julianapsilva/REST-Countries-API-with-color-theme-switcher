<template>
  <div class="countries-container">
    <div
      class="countries-item"
      v-for="country in countries"
      :key="country.name"
    >
      <router-link :to="{ name: 'country', params: { name: country.name } }">
        <img :src="country.flag" alt="" />
        <ul>
          <li class="country-name">{{ country.name }}</li>
          <li><strong>População: </strong>{{ population(country) }}</li>
          <li><strong>Região: </strong>{{ country.region }}</li>
          <li><strong>Capital: </strong>{{ country.capital }}</li>
        </ul>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    countries: Array
  },
  methods: {
    population(country) {
      return String(country.population).replace(/(.)(?=(\d{3})+$)/g, '$1,')
    }
  }
}
</script>

<style>
.countries-container {
  margin-right: 100px;
  margin-left: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 60px;
  line-height: 2;
}
.countries-container img {
  /* width: 50%; */
  max-width: 300px;
  height: 200px;
}
.countries-container ul li {
  list-style: none;
  text-align: left;
}
.countries-container ul li strong {
  font-weight: 600;
}

.country-name {
  font-size: 18px;
  margin-bottom: 5px;
  font-weight: 800;
  max-width: 250px;
}

.countries-item {
  box-shadow: 1px 4px 4px 0px rgba(0, 0, 0, 0.05);
  background: hsl(0, 0%, 100%);
  font-size: 14px;
}
.countries-item:hover {
  transform: scale(1.02);
  transition: all 0.3s;
}

@media (max-width: 1220px) {
  .countries-container {
    margin-right: 80px;
    margin-left: 80px;
    gap: 40px;
  }
}
</style>

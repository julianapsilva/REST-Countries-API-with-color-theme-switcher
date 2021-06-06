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
</template>

<script>
export default {
  props: {
    countries: []
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

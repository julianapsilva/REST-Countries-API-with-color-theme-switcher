<template>
  <div>
    <router-link to="/">
    <button>Voltar</button> </router-link>
    <img :src="description[0].flag" alt="">
    <h1>{{description[0].name}}</h1>
    <ul>
      <li>{{description[0].nativeName}}</li>
      <li>{{description[0].population}}</li>
      <li>{{description[0].region}}</li>
      <li>{{description[0].subregion}}</li>
      <li>{{description[0].capital}}</li>
      <li>{{description[0].topLevelDomain[0]}}</li>
      <li>{{description[0].currencies[0].name}}</li>
      <li>{{description[0].languages}}</li>
    </ul>
    <p>Border {{description[0].borders}}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Country",
  data() {
    return {
      description: []
    };
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  methods: {
    search() {
      axios
        .get(`https://restcountries.eu/rest/v2/name/${this.name}`)
        .then((r) => (this.description = r.data));
    },
  },
  created(){
    this.search();
  }

};
</script>

<style></style>

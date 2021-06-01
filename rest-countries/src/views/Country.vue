<template>
  <div>
    <p>Meu nome é {{ this.name }}</p>
    {{description}}
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

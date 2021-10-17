<template>
  <div>
    <button @click="redirect">Voltar</button>
    <section class="country-description">
      <img :src="description.flag" alt="" />
      <div class="info">
        <h1>{{ description.name }}</h1>
        <div class="know-more">
          <div>
            <ul>
              <li><b> Native name: </b>{{ description.nativeName }}</li>
              <li><b>Population:</b> {{ description.population }}</li>
              <li><b>Region:</b> {{ description.region }}</li>
              <li><b>Subregion:</b> {{ description.subregion }}</li>
              <li><b>Capital:</b> {{ description.capital }}</li>
            </ul>
          </div>

          <ul>
            <li>
              <b>Top Level Domain:</b>
              <ul>
                <li
                  v-for="(item, index) in description.topLevelDomain"
                  :key="index"
                >
                  {{ item }}
                  <p v-if="index < description.topLevelDomain.length - 1">
                    ,
                  </p>
                </li>
              </ul>
            </li>
            <li style="display:flex">
              <b>Currencies:</b>
              <ul>
                <li
                  v-for="(item, index) in description.currencies"
                  :key="index"
                >
                  {{ item.name }}
                </li>
              </ul>
            </li>

            <li>
              <ul id="example-1">
                <b>Languages: </b>
                <li v-for="(item, index) in description.languages" :key="index">
                  {{ item.name }}
                  <p v-if="index < description.languages.length - 1">,</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="border">
          <span>Border Countries</span>
          <ul>
            <li v-for="(item, index) in description.borders" :key="index">
              <button @click="goToBorderCountry(item)">{{ item }}</button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import api from '@/services/api'
export default {
  name: 'Country',
  data() {
    return {
      description: []
    }
  },
  methods: {
    search() {
      api.get(`v2/name/${this.$route.params.name}`).then(r => {
        this.description = r.data[0]
      })
    },
    redirect() {
      this.$router.back()
    },
    async goToBorderCountry(code) {
      const response = await api.get(`v2/alpha/${code}`)
      const goTo = response.data.name
      this.$router.push({ name: 'country', params: { name: goTo } })
    }
  },
  watch: {
    '$route.params.name'() {
      this.search()
    }
  },
  created() {
    this.search()
  }
}
</script>

<style>
.country-description {
  display: flex;
  justify-content: space-around;
}
.country-description img {
  max-width: 450px;
}
.country-description .info li {
  list-style: none;
  text-align: left;
}
.border ul {
  display: flex;
  gap: 20px;
}
.know-more {
  display: flex;
}
#example-1 {
  display: flex;
}
#example-1 li {
  display: flex;
}
</style>

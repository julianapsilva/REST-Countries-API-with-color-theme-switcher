<template>
  <PageLoading v-if="loading" />
  <div class="wrapper-country" v-else>
    <button @click="redirect" class="go-back">
      <span class="icon-text">
        <img src="@/assets/icons/arrow-left.svg" alt="goBack-icon" />
        <span>Back</span>
      </span>
    </button>
    <section class="country-description">
      <img :src="description.flag" alt="" />
      <div class="info">
        <h1>{{ description.name }}</h1>
        <div class="know-more">
          <div>
            <ul>
              <li><b> Native name: </b>{{ description.nativeName }}</li>
              <li><b>Population:</b> {{ population() }}</li>
              <li><b>Region:</b> {{ description.region }}</li>
              <li><b>Subregion:</b> {{ description.subregion }}</li>
              <li><b>Capital:</b> {{ description.capital }}</li>
            </ul>
          </div>

          <ul>
            <li>
              <ul class="example-1">
                <b>Top Level Domain:&nbsp; </b>
                <li
                  v-for="(item, index) in description.topLevelDomain"
                  :key="index"
                  class="item"
                >
                  {{ item }}
                </li>
              </ul>
            </li>

            <li>
              <ul class="example-1">
                <b>Currencies:&nbsp;</b>
                <li
                  v-for="(item, index) in description.currencies"
                  :key="index"
                  class="item"
                >
                  {{ item.name }}
                </li>
              </ul>
            </li>

            <li>
              <ul class="example-1">
                <b>Languages:&nbsp;</b>
                <li
                  v-for="(item, index) in description.languages"
                  :key="index"
                  class="item"
                >
                  {{ item.name }}
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="border" v-if="description.borders">
          <b>Border Countries: </b>
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
import PageLoading from '@/components/PageLoading'
import api from '@/services/api'
export default {
  name: 'Country',
  data() {
    return {
      loading: true,
      description: []
    }
  },
  components: {
    PageLoading
  },
  methods: {
    search() {
      this.loading = true
      api.get(`v2/name/${this.$route.params.name}`).then(r => {
        this.description = r.data[0]
        this.loading = false
        console.log(this.description)
      })
    },
    redirect() {
      this.$router.back()
    },
    async goToBorderCountry(code) {
      const response = await api.get(`v2/alpha/${code}`)
      const goTo = response.data.name
      this.$router.push({ name: 'country', params: { name: goTo } })
    },
    population() {
      return String(this.description.population).replace(
        /(.)(?=(\d{3})+$)/g,
        '$1,'
      )
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
  line-height: 2;
  align-items: center;
}
.country-description img {
  max-width: 550px;
  margin-right: 200px;
}
.country-description .info li {
  list-style: none;
  text-align: left;
}
.border {
  display: flex;
  align-items: center;
  margin-top: 40px;
}
.border ul {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
.border button {
  box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.07);
  padding: 4px 15px;
}
.border button:hover {
  background: rgba(0, 0, 0, 0.05);
}
.know-more {
  display: flex;
}
.know-more div:first-of-type {
  margin-right: 200px;
}
.example-1 {
  display: flex;
  flex-wrap: wrap;
  max-width: 450px;
}
.info h1 {
  text-align: left;
}
.go-back {
  align-self: flex-start;
  margin-bottom: 60px;
  margin-top: 30px;
  padding: 4px 30px;
  box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.17);
}
button {
  border: none;
  background: #fff;
  border: 0.5px solid rgba(0, 0, 0, 0.05);
  cursor: pointer;
}
.icon-text {
  display: flex;
  align-items: center;
  gap: 7px;
}

.wrapper-country {
  display: flex;
  flex-direction: column;
  padding: 0 100px;
}
li ul {
  padding-inline-start: 0;
}
ul {
  padding: 0;
}
.item + .item:before {
  content: ',\00a0';
}

@media (max-width: 1350px) {
  .know-more {
    flex-direction: column;
  }
  .border {
    margin-top: 20px;
    flex-direction: column;
  }
  .country-description img {
    margin-right: 100px;
    width: 100%;
  }
  .know-more div:first-of-type {
    margin-right: 0;
  }
}

@media (max-width: 1050px) {
  .wrapper-country {
    padding: 0 20px;
    padding-bottom: 40px;
  }

  .country-description {
    flex-direction: column;
  }
  .know-more {
    flex-direction: column;
  }
  .border {
    margin-top: 20px;
    flex-direction: column;
  }

  .country-description img {
    margin-right: 0;
    margin: 0 auto;
    max-width: 400px;
  }
  .know-more div:first-of-type {
    margin-right: 0;
  }
  .go-back {
    margin-top: 0;
  }
}
</style>

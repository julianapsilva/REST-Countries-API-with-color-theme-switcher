<template>
  <div id="app" :class="{ 'theme-dark': darkMode }">
    <Header @switch="switchTheme" />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  data() {
    return {
      darkMode: false
    }
  },
  components: {
    Header
  },
  methods: {
    switchTheme() {
      this.darkMode = !this.darkMode
    }
  },
  watch: {
    darkMode() {
      localStorage.setItem('darkMode', JSON.stringify(this.darkMode))
    }
  },
  created() {
    this.darkMode = JSON.parse(localStorage.getItem('darkMode'))
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');
:root {
  --dark-mode-elements: hsl(209, 23%, 22%);
  --light-mode-text: hsl(200, 15%, 8%);
  --light-mode-input: hsl(0, 0%, 52%);
  --light-mode-background: hsl(0, 0%, 98%);
  --white: hsl(0, 0%, 100%);
  --dark-mode-background: hsl(207, 26%, 17%);
}

body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Nunito Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 50px;

  min-height: 100vh;
  transition: all 0.5s ease-in-out;
  color: var(--light-mode-text);
  background-color: var(--light-mode-background);
}
a {
  text-decoration: none;
  color: var(--light-mode-text);
}
#app.theme-dark {
  color: var(--white);
  background-color: var(--dark-mode-background);
}
#app.theme-dark a {
  color: var(--white);
}
#app.theme-dark .countries-item {
  background-color: var(--dark-mode-elements);
}
</style>

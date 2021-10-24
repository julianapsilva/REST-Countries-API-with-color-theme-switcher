<template>
  <header class="header">
    <div>
      <router-link to="/"> <h1>Where in the world?</h1></router-link>
      <button @click="$emit('switch')">
        <fa icon="moon" />
        <span>Dark Mode</span>
      </button>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
.header {
  color: black;
  margin-top: -50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 1px 4px 4px 0px rgba(0, 0, 0, 0.04);
  align-items: center;
  margin-bottom: 40px;
  padding: 7px 100px;
}
.header div {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
.header button:hover {
  background: var(--light-mode-background);
  transition: none;
  border: none;
}

.header button span {
  margin-left: 10px;
}
.theme-dark .header button:hover {
  background: var(--dark-mode-elements);
  transition: none;
  border: none;

}

h1 {
  text-align: left;
  font-size: 20px;
}
.theme-dark .header {
  background: var(--dark-mode-elements);
}
@media (max-width: 1500px) {
  .header {
    padding: 0 50px;
  }
}
@media (max-width: 900px) {
  .header {
    padding: 7px 20px;
  }
  h1 {
    font-size: 15px;
  }
  .header div {
    align-items: center;
  }
  .header p {
    font-size: 13px;
  }
}
</style>

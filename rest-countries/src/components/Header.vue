<template>
  <header class="header">
    <div>
      <router-link to="/"> <h1>Where in the world?</h1></router-link>
      <button @click="$emit('switch')">Dark Mode</button>
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
  /* background: #fff; */
  padding: 0 100px;
}
.header div {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
h1 {
  text-align: left;
  font-size: 20px;
}
@media (max-width: 1500px) {
  .header {
    padding: 0 50px;
  }
}
@media (max-width: 900px) {
  .header {
    padding: 0 20px;
  }
  h1{
    font-size: 15px;
  }
  .header div{
    align-items: center;
  }
  .header p{
    font-size: 13px;
  }
}
</style>

<template>
  <div id="app">
    <div class="left">
      <p>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/icecream">Icecream</router-link>
        <router-link to="/dogs">Dogs</router-link>
      </p>
      <router-view></router-view>
    </div>
    <div class="right">
      <p>Logs</p>
      <ul>
        <li v-for="(v,p,idx) in $store.getters.log_messages">
          {{v.text}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
  };
</script>

<style scoped>
  div{
    border:0px solid black;
  }
  .left{
    width:70%;
    float:left;
  }
  .right{
    width:20%;
    float:left;
  }
</style>
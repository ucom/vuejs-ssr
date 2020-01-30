<template>
  <div id="app">
    Vuejs with:
    <ul>
      <li>server side rendering</li>
      <li>hot reloading server and client side</li>
      <li>vuex store</li>
      <li>vue router</li>
      <li>vue-meta</li>
    </ul>
    <p>
      <router-link to="/">Go To Home</router-link>
      <router-link to="/about">Go To About</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
  };
</script>
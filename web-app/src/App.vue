<template>
  <NavBar></NavBar>
  <router-view></router-view>
</template>

<script>
import NavBar from "./components/NavBar.vue";
// import { database } from "./firebase/Firebase.js";
export default {
  name: "App",
  components: {
    NavBar,
  }
};
</script>

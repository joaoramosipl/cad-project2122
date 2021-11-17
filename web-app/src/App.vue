<template>
  <NavBar></NavBar>
  <i class="fas fa-lightbulb"></i>
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

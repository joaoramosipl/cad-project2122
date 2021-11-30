<template>
  <div class="card">
    {{ title }}
    <ThingComponent v-for="thing in things" :key="thing" :thing="thing" />
  </div>
</template>

<script>
import ThingComponent from "./ThingComponent.vue";
import { getDatabase, ref, onValue } from "firebase/database";
export default {
  name: "ZoneCard",
  props: ["title"],
  components: {
    ThingComponent,
  },
  data() {
    return {
      things: [],
    };
  },
  mounted() {
    onValue(ref(getDatabase(), this.title), (snapshot) => {
      if (snapshot.exists()) {
        this.things = snapshot.val();
      }
    })
  },
};
</script>

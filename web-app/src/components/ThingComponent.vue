<template>
  <p v-if="thing.type == 'sensor'">{{ thing.name }} - {{ value }}</p>
  <p v-else>
    {{ thing.name }} -
    <button v-if="value" class="btn btn-danger" @click="onClick()">Turn Off</button>
    <button v-else class="btn btn-success" @click="onClick()">Turn On</button>
  </p>
</template>

<script>
import { getDatabase, ref, set, onValue } from "firebase/database";

export default {
  name: "ThingComponent",
  props: ["thing"],
  data() {
    return {
      value: "",
    };
  },
  methods: {
      onClick() {
        set(ref(getDatabase(), this.thing.path), !this.value)
      }
  },
  mounted() {
    onValue(ref(getDatabase(), this.thing.path), (snapshot) => {
      if (snapshot.exists()) {
        this.value = snapshot.val();
      }
    });
  },
};
</script>

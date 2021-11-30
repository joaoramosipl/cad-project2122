<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-6">
        <ZoneCard :title="'Garden'" />
      </div>
      <div class="col-6">
        <ZoneCard :title="'Yard'" />
      </div>
    </div>
  </div>
</template>

<script>
import ZoneCard from "./ZoneCard.vue";

export default {
  name: "HomePage",
  components: {
    ZoneCard,
  }
};
</script>

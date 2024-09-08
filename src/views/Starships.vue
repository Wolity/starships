<script setup>
import Card from "../components/Card.vue";
import Loader from "../components/Loader.vue";
</script>

<template>
  <section class="starships">
    <Loader v-if="false"/>
    <Card />
    <Card />
    <Card />
  </section>
</template>
<style scoped lang="scss">
section {
  margin-top: 45px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
}
</style>

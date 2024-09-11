<script setup>
import { onMounted, ref } from "vue";
import Card from "../components/Card.vue";
import Loader from "../components/Loader.vue";
const starship = ref([]);
const loader = ref(true);
onMounted(() => getStarShip());

async function getStarShip() {
  for (let i = 1; i <= 3; i++) {
    let n = await fetch(`https://swapi.dev/api/starships/?page=${i}`);
    n = await n.json();
    for (let r of n.results) {
      starship.value.push(r);
    }
  }
  loader.value = false;
}
</script>

<template>
  <section>

    <Loader v-if="loader" />
    <Card v-for="(item, i) in starship" :key="i" :d="item" v-else />
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

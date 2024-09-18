<script setup>
import {ref} from "vue";
import Card from "../components/Card.vue";
import Loader from "../components/Loader.vue";
const starship = ref([]);
const loader = ref(false);
const search = ref("");

async function getStarShip() {
  loader.value = true;
  if (search.value != "") {
    let n = await fetch(`https://swapi.dev/api/starships/?search=${search.value}
`);
    n = await n.json();
    starship.value = n.results;
  }
  else{
    starship.value = []
  }

  loader.value = false;
}
</script>

<template>
  <section>
    <input placeholder="Введите Запрос" v-model="search" @input="getStarShip"/>
    <Loader v-if="loader" />
    <Card
      v-for="(item, i) in starship"
      :key="i"
      :id="item.url.split('/')[5]"
      :card="item"
      v-else
    />
  </section>
</template>

<style scoped lang="scss">
section {
  input {
    width: 100%;
    grid-column: 1/4;
    padding: 10px 10px;
    background: var(--color-black);
    border: 1px solid var(--color-white);
    color: var(--color-white);
  }
  margin-top: 45px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
}
@media screen and (max-width: 1024px) {
  section {
    margin-top: 30px;
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 720px) {
  section {
    margin-top: 20px;
    grid-template-columns: 1fr;
  }
}
</style>

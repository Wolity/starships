<script setup>
import { ref } from "vue";

defineProps({
  card: Object,
  id: String,
});
let imgError = ref(false);
</script>
<template>
  <router-link :to="{ name: 'detail', params: { id: id } }" class="card">
    <img
      v-if="!imgError"
      @error="imgError = true"
      class="card_img"
      :src="`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`"
    />
    <img
      v-else
      class="card_img"
      src="https://w7.pngwing.com/pngs/602/736/png-transparent-warning-sign-no-symbol-computer-icons-no-miscellaneous-angle-text.png"
    />
    <nav class="card_block">
      <h2>Name:</h2>
      <h2>{{ card.name }}</h2>
    </nav>
    <nav class="card_block">
      <h2>Length:</h2>
      <h2>{{ card.length }}</h2>
    </nav>
  </router-link>
</template>
<style scoped lang="scss">
.card {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: var(--color-white);
  padding: 20px;
  border-radius: 8px;
  .card_img {
    border-radius: 8px;
    aspect-ratio: 1/1;
    object-fit: cover;
  }
  .card_block {
    color: var(--color-black);
    display: flex;
    justify-content: space-between;
    font-size: var(--size-text);
    margin-top: 10px;
  }
}
</style>

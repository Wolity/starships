<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const imgError = ref(false);
const router = useRoute();
</script>

<template>
  <div class="detail">
    <h1>Название корабля</h1>
    <main>
      <img
        v-if="!imgError"
        @error="imgError = true"
        :src="`https://starwars-visualguide.com/assets/img/starships/${router.params.id}.jpg`"
      />
      <img
        v-else
        src="https://w7.pngwing.com/pngs/602/736/png-transparent-warning-sign-no-symbol-computer-icons-no-miscellaneous-angle-text.png"
      />
      <nav>
        <div>
          <span>Модель:</span>
          <h2>Название Модели</h2>
        </div>

        <div>
          <span>Модель:</span>
          <h2>Название Модели</h2>
        </div>

        <div>
          <span>Модель:</span>
          <h2>Название Модели</h2>
        </div>

        <div>
          <span>Модель:</span>
          <h2>Название Модели</h2>
        </div>

        <div>
          <span>Модель:</span>
          <h2>Название Модели</h2>
        </div>
      </nav>
    </main>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
      deleniti possimus quis voluptates sint eveniet maiores cupiditate
      voluptatum officiis? Tenetur ab dolorum architecto velit cumque, nobis in
      sed aliquid nisi!
    </p>
  </div>
</template>

<style scoped lang="scss">
.detail {
  color: var(--color-white);
  h1 {
    margin-top: 150px;
    margin-bottom: 60px;
    font-size: var(--size-title);
    color: var(--color-gold);
  }
  main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    img{
        border-radius:10px;
    }

    nav {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
      div {
        display: flex;
        justify-content: space-between;

        span {
            font-size: var(--size-text) ;
        }
        h2 {
            font-size: var(--size-text);
        }
      }
    }
  }
  p {
    font-size: var(--size-elem);
    margin-top: 80px;
    padding-bottom: 150px;
  }
}
</style>

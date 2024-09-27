<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const imgError = ref(false);
const router = useRoute();
const starship = ref({});
async function getStarship() {
  let card_api = await fetch(`https://swapi.dev/api/starships/${router.params.id}`);
  console.log("работает")
  starship.value = await card_api.json();
}
onMounted(() => getStarship());
</script>

<template>
  <div class="detail">
    <h1>{{ starship.name }}</h1>
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
          <span>Model:</span>
          <h2>{{starship.model}}</h2>
        </div>

        <div>
          <span>Name:</span>
          <h2>{{starship.name}}</h2>
        </div>

        <div>
          <span>Length:</span>
          <h2>{{starship.length}}</h2>
        </div>

        <div>
          <span>Cost:</span>
          <h2>{{starship.cost_in_credits}}</h2>
        </div>

        <div>
          <span>Created:</span>
          <h2>{{ starship.created }}</h2>
        </div>
      </nav>
    </main>
    <p>
      {{ starship.manufacturer }}
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
    img {
      border-radius: 10px;
    }

    nav {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      div {
        display: flex;
        justify-content: space-between;
        span {
          font-size: var(--size-text);
        }
        h2 {
          font-size: var(--size-text);
        }
      }
    }
  }
  p {
    line-height: 1.5;
    font-size: var(--size-elem);
    margin-top: 80px;
    padding-bottom: 150px;
  }
}
@media screen and (max-width: 1024px) {
  .detail {
    h1 {
      margin-top: 125px;
    }
    main {
      display: grid;
      grid-template-columns: 1fr;
      div {
        margin-bottom: 10px;
      }
    }
  }
}
</style>

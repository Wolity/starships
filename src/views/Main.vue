<template>
  <section>
    <h1>Welcome to StarDB</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius voluptatum,
      saepe corrupti debitis ea tempora ratione expedita quo excepturi sit
      dolorum? Qui ipsam perspiciatis hic accusantium pariatur facere eius nam!
    </p>
  </section>
</template>
<style lang="scss" scoped>
section {
  h1 {
    color: var(--color-gold);
    margin-top: 161px;
    font-size: var(--size-title);
  }
  p {
    color: var(--color-white);
    margin-top: 60px;
    font-size: var(--size-text);
    width: 85%;
    line-height: 120%;
  }
}
@media screen and (max-width: 720px) {
  section {
    text-align: center;
    p{
        width: 100%;
    }
  }
}
</style>

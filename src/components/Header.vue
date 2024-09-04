<template>
  <header class="header">
    <router-link to="/" class="header_left">StarDB</router-link>
    <nav class="header_right">
      <router-link to="/search" class="right_link">Form</router-link>
      <router-link to="/starships" class="right_link">Starships</router-link>
    </nav>
  </header>
</template>

<style lang="scss">
.header {
  padding-top: 40px;
  color: var(--color-white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header_left {
    font-size:var(--size-text);
    opacity: 1;
    transition: all 0.3s;
    &:hover{
      opacity: 0.7;
    }
  }
  .header_right {
    .right_link {
        opacity: 1;
        font-size: var(--size-elem);
        margin-left: 30px;
        transition: all 0.3s;
        &:hover{
          opacity: 0.7;
        }
    }
  }
}
</style>

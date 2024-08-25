<template>
  <header class="header">
    <a class="header_left">StarDB</a>
    <nav class="header_right">
      <a class="right_link">Form</a>
      <a class="right_link">Starships</a>
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
  }
  .header_right {
    .right_link {
        font-size: var(--size-elem);
        margin-left: 30px;
    }
  }
}
</style>

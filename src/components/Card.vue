<template>
  <div class="card">
    <img class = "card_img"
      src="https://w7.pngwing.com/pngs/602/736/png-transparent-warning-sign-no-symbol-computer-icons-no-miscellaneous-angle-text.png"
    />
    <nav class="card_block">
        <h2>Name:</h2>
        <h2>корабль</h2>
    </nav>
    <nav class="card_block">
        <h2>Created:</h2>
        <h2>давно</h2>
    </nav>
    <nav class="card_block">
        <h2>Length:</h2>
        <h2>длинный</h2>
    </nav>
  </div>
</template>
<style scoped lang="scss">
.card {
    display: flex;
    flex-direction: column;
    background:var(--color-white) ;
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
        font-size:var(--size-text) ;
        margin-top: 10px;
    }
}
</style>

<script setup>
import Header from "./components/Header.vue";
import {RouterView} from "vue-router"
</script>

<template>
  <main class="app">
    <Header />
    <RouterView/> 
  </main>
</template>

<style>
.app{
  background: var(--color-black);
  min-height:100vh;
  padding: 0px 50px;
  font-family: 'Gilroy-ExtraBold';
}
@media screen and (max-width:1024px){
  .app{
    padding: 0px 30px;
  }  
}
@media screen and (max-width:450px){
  .app{
    padding: 0px 10px;
  }  
}
</style>

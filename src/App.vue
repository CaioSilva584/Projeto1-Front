<script setup>
import HeaderFormat from './components/HeaderFormat.vue'
import Cards from './components/Cards.vue'

console.log("Lembrar de perguntar ao Lucas pra q server o *,*::before,*::after")
</script>


<template>
  <HeaderFormat/>
  <Cards/>
</template>


<style scoped>
.header-wrapper {
  box-shadow: 4px 4px 10px black;
  background-color: rgb(50, 77, 126);
  font-size: 28px;
  padding: 1rem;
  margin: 0 auto;
}

.imagens {
  padding: 0;
  margin: 0;
}

</style>

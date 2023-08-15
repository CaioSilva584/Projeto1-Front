<script setup>
console.log("Lembrar de perguntar ao Lucas pra q server o *,*::before,*::after")
</script>


<template>
  <section class="header-wrapper">
    <div>
      <h1>Cursos Online</h1>
    </div>
    <div>
      <h5>Cursos de diversas áreas para você!</h5>
    </div>
  </section>
  <section>
    <div class="cards-wrapper">
      Curso de natação
    </div>
    <div class="cards-wrapper">
      Curso de primeiros Socorros
    </div>
    <div class="cards-wrapper">
      Curso de combate ao incêndio
    </div>
    <div class="cards-wrapper">
      Curso de combate ao Thanos
    </div>
  </section>
</template>


<style scoped>
.header-wrapper {
  box-shadow: 4px 4px 10px black;
  background-color: rgb(50, 77, 126);
  font-size: 28px;
  padding: 1rem;
}

.cards-wrapper {
  display: inline-block;
  box-shadow: 4px 4px 10px black;
  border-radius: 10px 10px;
  width: 30em;
  padding: 4em;
  margin: 2em;
  background-color: rgb(15, 14, 76);
  text-align: center;
}

</style>

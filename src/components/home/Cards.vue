<script setup>
import { ref, onMounted } from 'vue';
import cursoService from "../../services/cursoService"

const cursos = ref([])

function load(){
    cursos.value = cursoService.getCursos()
}

onMounted(load)

</script>

<template>
    <section>
        <RouterLink custom v-slot="{ navigate }" :to="`/cursos/${curso.id}`" v-for="curso of cursos">
            <div class="cards-wrapper" @click="navigate">
                <img :src="curso.imagem" :alt="curso.descricao">
                <div class="card-description">
                    <b>{{ curso.nome }}</b>

                </div>
            </div>
        </RouterLink>

    </section>
</template>

<style scoped>
.cards-wrapper {
    display: inline-block;
    box-shadow: 4px 4px 10px black;
    border-radius: 10px 10px;
    width: 30em;
    margin: 2em;
    margin-bottom: 0;
    background-color: rgb(15, 14, 76);
    text-align: center;
    overflow: clip;
    cursor: pointer;
}

.cards-wrapper>img {
    width: 100%;
    height: 300px;
}

.card-description {
    padding: 1em;
}

section {
    display: flex;
    flex-wrap: wrap;
}

button {
    border-width: 0;
    margin: 0;
    padding: 0;
    align-items: end;
    border-color: blueviolet;
}
</style>
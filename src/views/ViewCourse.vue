<script setup>
import { ref, onMounted } from "vue"

import cursoService from "../services/cursoService"

import HeaderFormat from "../components/home/HeaderFormat.vue";

import { RouterLink, useRoute } from "vue-router";
import natacao from "../assets/img/natacao.jpg"

const route = useRoute()
const { cursoId } = route.params

const curso = ref()

function load() {
    curso.value = cursoService.getCurso(cursoId)
    console.log("curso", curso.value)
}

onMounted(load)

</script>

<template>
    <HeaderFormat />
    <section class="body-top">
        <div v-if="curso" id="course-nome">
            <h1>{{ curso.nome }}</h1>
        </div>
        <div>
            <button class="button-menu" id="add">
                Adicionar Recursos
            </button>
            <button class="button-menu" id="edit">
                Editar
            </button>

            <button class="button-menu" id="delete">
                Excluir Curso
            </button>
        </div>

    </section>

    <section class="body-wrapper">
        <div v-if="curso">
            <h1>Descrição</h1>
            <h4>{{ curso.descricao }}</h4>
            <img :src="curso.imagem">
        </div>

    </section>
</template>

<style scoped>
.body-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5em;
    margin-bottom: 1em;
    gap: 10em;
}

.body-top h1 {
    font-size: 2.2em;
}

.body-wrapper {
    border-style: solid;
    border-radius: 10px 10px;
    border-color: rgba(84, 84, 84, 0.65);
    margin: 5em;
    margin-top: 0;
    padding: 1em auto;
}

.body-wrapper h1 {
    padding-left: 3em;
    padding: 2em;
}

.body-wrapper h4 {
    padding-left: 3em;
    padding-top: 0;
    padding: 2em;
    margin: 0;

}

.body-wrapper img{
    width: 30%;
    height: 30%;
    align-items: center;

}

.button-menu {
    border-radius: 0.5em 0.5em;
    background-color: rgb(15, 14, 76);
    margin-left: 1em;
    padding: 0.5em 1.5em;
    color: rgba(235, 235, 235, 0.64);
    border-color: rgb(84, 84, 84, 0.65);
    border-style: solid;
    cursor: pointer;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
        Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 1em;
    align-items: center;

}

#delete{
    background-color: #181818;
}

#delete:hover{
    background-color: #282828;
}
.button-menu:hover {
    background-color: rgb(19, 18, 94);
}
</style>
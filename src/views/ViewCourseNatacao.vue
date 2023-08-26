<script setup>
import { ref, onMounted } from "vue"

import cursoService from "../services/cursoService"

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
    <section class="header-wrapper">
        <div v-if="curso">
            <h1>{{ curso.nome }}</h1>
        </div>
    </section>
    <section class="body-wrapper">
        <div v-if="curso">
            <h1>Descrição</h1>
            <h4>{{curso.descricao}}</h4>
            <img :src="curso.imagem">
        </div>

    </section>
    <section class="buttons-menu">
        <RouterLink to="/recursos">
            <button id="add">
                Adicionar Recursos
            </button>
        </RouterLink>

        <button id="edit">
            Editar
        </button>

        <button id="delete">
            Excluir Curso
        </button>


    </section>
</template>

<style scoped>
.body-wrapper {
    border-style: solid;
    border-radius: 20px 20px;
    border-color: rgba(84, 84, 84, 0.65);
    margin: 5em;
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

/* .button-menu{

} */
</style>
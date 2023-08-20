<script setup>
import { ref } from 'vue';
import natacao from "../../assets/img/natacao.jpg"
import primeirosSocorros from "../../assets/img/primeiros-socorros.jpg"
import combateIncendio from "../../assets/img/combate-incendio.png"
import thanos from "../../assets/img/thanos-filme.jpg"

const cursos = ref([
    {
        imagem: natacao,
        descricao: "",
        nome: "Curso de natação"
    },
    {
        imagem: primeirosSocorros,
        descricao: "",
        nome: "Curso de primeiros Socorros"
    },
    {
        imagem: combateIncendio,
        descricao: "",
        nome: "Curso de combate ao incênido"
    },
    {
        imagem: thanos,
        descricao: "",
        nome: "Curso de combate ao Thanos"
    },
])

</script>

<template>
    <section>
        <div class="cards-wrapper" v-for="curso of cursos">
            <img :src="curso.imagem" :alt="curso.descricao">
            <div class="card-description">
                <b>{{ curso.nome }}</b>
                <RouterLink to="/cursos">
                    <button>
                        Visualizar
                    </button>
                </RouterLink>
            </div>
        </div>
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